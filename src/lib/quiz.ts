export type Option = { value: string; label: string; icon: string }

export const Q1 = {
  title: 'Welche Anlage planen Sie?',
  options: [
    { value: 'automatisierung-robotik', label: 'Automatisierung & Robotik', icon: 'Bot' },
    { value: 'foerdertechnik', label: 'Fördertechnik & Materialfluss', icon: 'Workflow' },
    { value: 'lebensmittelindustrie', label: 'Anlage für die Lebensmittelindustrie', icon: 'Utensils' },
    { value: 'trennsiebanlage-sonder', label: 'Trennsieb- oder Sondermaschine', icon: 'Cog' },
  ] as Option[],
}

export const Q2 = {
  title: 'Wann soll die Anlage in Betrieb gehen?',
  options: [
    { value: 'sofort', label: 'So schnell wie möglich', icon: 'Zap' },
    { value: '3-6-monate', label: 'In 3–6 Monaten', icon: 'CalendarClock' },
    { value: '6-12-monate', label: 'In 6–12 Monaten', icon: 'CalendarRange' },
    { value: 'planung', label: 'Noch in der Planung', icon: 'Lightbulb' },
  ] as Option[],
}

const KEY = 'asmb-quiz'
export type Answers = { q1?: string; q2?: string }

export function loadAnswers(): Answers {
  try { return JSON.parse(sessionStorage.getItem(KEY) || '{}') } catch { return {} }
}
export function saveAnswer(k: 'q1' | 'q2', v: string) {
  try { sessionStorage.setItem(KEY, JSON.stringify({ ...loadAnswers(), [k]: v })) } catch {}
}
export function label(opts: Option[], v?: string) {
  return opts.find((o) => o.value === v)?.label
}
