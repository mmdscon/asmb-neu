'use client'

import { useEffect, useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { loadAnswers } from '@/lib/quiz'

export default function ContactForm() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', telefon: '' })
  const [state, setState] = useState<'idle' | 'loading' | 'error'>('idle')

  useEffect(() => {
    const a = loadAnswers()
    if (!a.q1) router.replace('/#quiz')
    else if (!a.q2) router.replace('/frage-2')
  }, [router])

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setState('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, ...loadAnswers(), page: location.href }),
      })
      if (!res.ok) throw new Error()
      try { (window as any).fbq?.('track', 'Lead') } catch {}
      router.push('/danke')
    } catch {
      setState('error')
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block font-bold mb-2">Name</label>
        <input id="name" required autoComplete="name" className="field" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      </div>
      <div>
        <label htmlFor="email" className="block font-bold mb-2">E-Mail</label>
        <input id="email" type="email" required autoComplete="email" className="field" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </div>
      <div>
        <label htmlFor="tel" className="block font-bold mb-2">Telefon</label>
        <input id="tel" type="tel" required autoComplete="tel" className="field" value={form.telefon} onChange={(e) => setForm({ ...form, telefon: e.target.value })} />
      </div>
      <p className="text-sm text-stone-600">
        Informationen zur Übermittlung Ihrer Angaben finden Sie in den{' '}
        <a href="https://sut.at/datenschutz" target="_blank" rel="noopener noreferrer" className="underline">Datenschutzhinweisen</a>.
      </p>
      {state === 'error' && <p className="text-red-600 text-sm">Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie uns an: +43 2626 63951-0</p>}
      <button className="btn btn-dark" disabled={state === 'loading'}>
        {state === 'loading' ? 'Wird gesendet …' : <>Kostenlos anfragen <ArrowUpRight size={16} /></>}
      </button>
    </form>
  )
}
