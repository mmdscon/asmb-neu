'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, type LucideIcon, Bot, Workflow, Utensils, Cog, Zap, CalendarClock, CalendarRange, Lightbulb } from 'lucide-react'
import { Option, saveAnswer } from '@/lib/quiz'

const ICONS: Record<string, LucideIcon> = {
  Bot, Workflow, Utensils, Cog, Zap, CalendarClock, CalendarRange, Lightbulb,
}

export default function Quiz({
  step, title, options, next, back, backLabel, variant,
}: {
  step: 1 | 2; title: string; options: Option[]; next: string; back?: string; backLabel?: string; variant: 'dark' | 'light'
}) {
  const router = useRouter()
  const pick = (v: string) => {
    saveAnswer(step === 1 ? 'q1' : 'q2', v)
    try { (window as any).fbq?.('trackCustom', `QuizStep${step}`, { answer: v }) } catch {}
    router.push(next)
  }
  const dark = variant === 'dark'
  return (
    <div className="fade-in">
      {back && (
        <Link href={back} className={`inline-flex items-center gap-2 text-sm underline underline-offset-4 mb-8 ${dark ? 'text-white/85' : 'text-ink/70'}`}>
          <ArrowLeft size={14} /> {backLabel}
        </Link>
      )}
      <p className={`text-sm mb-2 ${dark ? 'text-white/70' : 'text-ink/60'}`}>Frage {step} von 2</p>
      <h2 className={`text-2xl md:text-4xl font-bold mb-6 md:mb-8 ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {options.map((o) => {
          const Icon = ICONS[o.icon]
          return (
            <button key={o.value} type="button" onClick={() => pick(o.value)} className={`tile ${dark ? 'tile-light' : 'tile-dark'}`}>
              <span className="ico">{Icon && <Icon size={44} strokeWidth={1.5} />}</span>
              <span className="lbl">{o.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
