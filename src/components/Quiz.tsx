'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, type LucideIcon, Bot, Workflow, Utensils, Cog, Zap, CalendarClock, CalendarRange, Lightbulb } from 'lucide-react'
import { Option, saveAnswer } from '@/lib/quiz'

const ICONS: Record<string, LucideIcon> = {
  Bot, Workflow, Utensils, Cog, Zap, CalendarClock, CalendarRange, Lightbulb,
}

export default function Quiz({
  step, title, options, next, back, backLabel,
}: {
  step: 1 | 2; title: string; options: Option[]; next: string; back?: string; backLabel?: string
}) {
  const router = useRouter()
  const [picked, setPicked] = useState<string | null>(null)
  const [leaving, setLeaving] = useState(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    router.prefetch(next)
    return () => timers.current.forEach(clearTimeout)
  }, [router, next])

  const pick = (v: string) => {
    if (picked) return
    setPicked(v)
    saveAnswer(step === 1 ? 'q1' : 'q2', v)
    try { (window as any).fbq?.('trackCustom', `QuizStep${step}`, { answer: v }) } catch {}
    // kurzes Auswahl-Feedback, dann ausblenden, dann navigieren
    timers.current.push(setTimeout(() => setLeaving(true), 260))
    timers.current.push(setTimeout(() => router.push(next), 560))
  }

  return (
    <div className={`quiz ${leaving ? 'quiz-leaving' : ''}`}>
      {back && (
        <Link href={back} className="rise inline-flex items-center gap-2 text-sm underline underline-offset-4 mb-8 text-white/85 hover:text-white transition-colors" style={{ ['--d' as string]: '0ms' }}>
          <ArrowLeft size={14} /> {backLabel}
        </Link>
      )}
      <p className="rise text-sm font-semibold uppercase tracking-[.14em] text-accent mb-3" style={{ ['--d' as string]: '40ms' }}>Frage {step} von 2</p>
      <h2 className="rise text-2xl md:text-4xl font-bold uppercase tracking-wide text-white mb-6 md:mb-8" style={{ ['--d' as string]: '80ms' }}>{title}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {options.map((o, i) => {
          const Icon = ICONS[o.icon]
          const state = picked === null ? '' : picked === o.value ? 'tile-picked' : 'tile-dim'
          return (
            <button key={o.value} type="button" onClick={() => pick(o.value)} disabled={picked !== null && picked !== o.value}
              className={`tile rise ${state}`} style={{ ['--d' as string]: `${140 + i * 70}ms` }}>
              <span className="ico">{Icon && <Icon size={40} strokeWidth={1.5} />}</span>
              <span className="lbl">{o.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
