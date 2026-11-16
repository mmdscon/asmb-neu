// Basispfad für den Export auf asmb.at/projektanfrage (siehe npm run build:php).
// Ohne Variable (z. B. Vercel-Vorschau) läuft die Seite im Root.
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
export const asset = (p: string) => `${BASE}${p}`
