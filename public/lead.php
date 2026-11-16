<?php
// Lead-Versand für das ASMB-Quiz (asmb.at/projektanfrage)
// Nimmt JSON per POST entgegen und schickt pro Lead eine E-Mail an die Empfänger unten.

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const RECIPIENTS = ['lennart@digitalisierungshilfe.at', 'l.sinawehl@sut.at'];
const MAIL_FROM  = 'noreply@asmb.at';   // muss eine Adresse der eigenen Domain sein (Zustellbarkeit/SPF)
const FROM_NAME  = 'ASMB Projektanfrage';

function fail(int $code, string $msg): void {
    http_response_code($code);
    echo json_encode(['ok' => false, 'error' => $msg]);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') fail(405, 'method');

$b = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($b)) fail(400, 'json');

// Honeypot: echte Besucher lassen das Feld leer
if (!empty($b['website'])) { echo json_encode(['ok' => true]); exit; }

// Eingaben säubern (keine Zeilenumbrüche -> kein Header-Injection)
function clean($v, int $max = 200): string {
    $v = is_scalar($v) ? (string)$v : '';
    $v = trim(preg_replace('/[\r\n\t]+/', ' ', $v));
    return mb_substr($v, 0, $max);
}

$name  = clean($b['name'] ?? '');
$email = clean($b['email'] ?? '');
$tel   = clean($b['telefon'] ?? '', 50);
$q1    = clean($b['q1'] ?? '');
$q2    = clean($b['q2'] ?? '');
$page  = clean($b['page'] ?? '', 500);

if ($name === '' || $tel === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) fail(422, 'invalid');

$anlage = [
    'automatisierung' => 'Automatisierung',
    'robotik' => 'Robotik',
    'foerdertechnik' => 'Fördertechnik & Materialfluss',
    'lebensmittelindustrie' => 'Anlage für die Lebensmittelindustrie',
][$q1] ?? ($q1 ?: '–');
$zeit = [
    'sofort' => 'So schnell wie möglich',
    '3-6-monate' => 'In 3–6 Monaten',
    '6-12-monate' => 'In 6–12 Monaten',
    'planung' => 'Noch in der Planung',
][$q2] ?? ($q2 ?: '–');

$ip   = $_SERVER['REMOTE_ADDR'] ?? '–';
$time = date('d.m.Y H:i:s');

$body = "Neue Projektanfrage über asmb.at/projektanfrage\n\n"
      . "Name:        $name\n"
      . "E-Mail:      $email\n"
      . "Telefon:     $tel\n\n"
      . "Anlage:      $anlage\n"
      . "Zeitrahmen:  $zeit\n\n"
      . "Seite:       $page\n"
      . "Zeitpunkt:   $time\n"
      . "IP:          $ip\n";

$subject = '=?UTF-8?B?' . base64_encode("Neue Anfrage: $name – $anlage") . '?=';
$headers = [
    'From: =?UTF-8?B?' . base64_encode(FROM_NAME) . '?= <' . MAIL_FROM . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = 0;
foreach (RECIPIENTS as $to) {
    if (@mail($to, $subject, $body, implode("\r\n", $headers), '-f' . MAIL_FROM)) $sent++;
}

// Sicherheitsnetz: Lead zusätzlich ins Log schreiben (Ordner ist per .htaccess gesperrt)
$dir = __DIR__ . '/leads-log';
if (!is_dir($dir)) { @mkdir($dir, 0750); @file_put_contents($dir . '/.htaccess', "Require all denied\nDeny from all\n"); }
@file_put_contents($dir . '/leads.log', json_encode([
    'time' => $time, 'name' => $name, 'email' => $email, 'telefon' => $tel,
    'anlage' => $q1, 'zeit' => $q2, 'mail_ok' => $sent,
], JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX);

if ($sent === 0) fail(502, 'mail');
echo json_encode(['ok' => true]);
