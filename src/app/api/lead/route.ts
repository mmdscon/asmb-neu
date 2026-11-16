import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  let b: Record<string, string>
  try { b = await req.json() } catch { return NextResponse.json({ ok: false }, { status: 400 }) }
  const clean = (v: unknown, n = 200) => String(v ?? '').trim().slice(0, n)
  const lead = {
    name: clean(b.name), email: clean(b.email), telefon: clean(b.telefon, 50),
    anlage: clean(b.q1), zeitrahmen: clean(b.q2), page: clean(b.page, 500),
    source: 'ASMB Quiz-Funnel', timestamp: new Date().toISOString(),
  }
  if (!lead.name || !/^\S+@\S+\.\S+$/.test(lead.email) || !lead.telefon) {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 422 })
  }
  const hook = process.env.WEBHOOK_URL || process.env.NEXT_PUBLIC_WEBHOOK_URL
  if (hook) {
    const r = await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) }).catch(() => null)
    if (!r || !r.ok) return NextResponse.json({ ok: false }, { status: 502 })
  } else {
    console.log('LEAD (kein WEBHOOK_URL gesetzt):', lead)
  }
  return NextResponse.json({ ok: true })
}
