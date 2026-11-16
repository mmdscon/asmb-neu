'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Shell from '@/components/Shell'
import Quiz from '@/components/Quiz'
import Badges from '@/components/Badges'
import { Q2, loadAnswers } from '@/lib/quiz'

export default function Frage2() {
  const router = useRouter()
  useEffect(() => { if (!loadAnswers().q1) router.replace('/#quiz') }, [router])
  return (
    <>
      <Header />
      <main>
        <Shell>
          <Quiz step={2} title={Q2.title} options={Q2.options} next="/kontakt" back="/#quiz" backLabel="Zurück zu Frage 1" />
          <div className="mt-12"><Badges items={['Persönliche Beratung', 'Unverbindlich', 'Antwort innerhalb 24h']} /></div>
        </Shell>
      </main>
      <Footer />
    </>
  )
}
