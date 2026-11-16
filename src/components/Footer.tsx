'use client'

export default function Footer() {
  return (
    <footer className="wrap py-12 text-center text-sm text-stone-600 space-y-3">
      <p className="space-x-3">
        <a className="underline underline-offset-4" href="https://sut.at/impressum" target="_blank" rel="noopener noreferrer">Impressum</a>
        <span>·</span>
        <a className="underline underline-offset-4" href="https://sut.at/datenschutz" target="_blank" rel="noopener noreferrer">Datenschutz</a>
      </p>
      <p>© {new Date().getFullYear()} ASMB Sondermaschinenbau • Gewerbepark 1, A-7221 Marz • Alle Rechte vorbehalten</p>
      <p><button className="underline underline-offset-4" onClick={() => { try { localStorage.removeItem('sut-cookie-consent') } catch {} location.reload() }}>Cookie-Einstellungen</button></p>
    </footer>
  )
}
