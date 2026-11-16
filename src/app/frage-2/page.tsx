'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Quiz from '@/components/Quiz'
import Badges from '@/components/Badges'
import { Q2, loadAnswers } from '@/lib/quiz'

export default function Frage2() {
  const router = useRouter()
  useEffect(() => { if (!loadAnswers().q1) router.replace('/#quiz') }, [router])
  return (
    <>
      <Header />
      <main className="wrap">
        <div className="rounded-[2rem] md:rounded-[2.5rem] bg-ink p-6 md:p-12 min-h-[420px]">
          <Quiz step={2} title={Q2.title} options={Q2.options} next="/kontakt" back="/#quiz" backLabel="Zurück zu Frage 1" variant="dark" />
          <div className="mt-8"><Badges items={['Persönliche Beratung', 'Unverbindlich', 'Antwort innerhalb 24h']} /></div>
        </div>
      </main>
      <Footer />
    </>
  )
}
