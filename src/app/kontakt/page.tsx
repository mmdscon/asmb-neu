import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Shell from '@/components/Shell'
import Badges from '@/components/Badges'
import ContactForm from '@/components/ContactForm'

export const metadata = { title: 'Kostenlos anfragen – ASMB Sondermaschinenbau' }

export default function Kontakt() {
  return (
    <>
      <Header cta={false} />
      <main>
        <Shell>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="text-white">
              <Link href="/frage-2" className="inline-flex items-center gap-2 text-sm underline underline-offset-4 text-white/85 mb-8"><ArrowLeft size={14} /> Zurück zu Frage 2</Link>
              <p className="eyebrow">Letzter Schritt</p>
              <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide leading-[1.1]">Ihre Anlage <span className="text-accent">nimmt Form an.</span></h1>
              <p className="mt-6 text-lg text-white/80 max-w-lg">
                Sie sind einen Schritt davon entfernt, Ihr Projekt mit einem Team zu besprechen, das über 100 Anlagen realisiert hat. Wir melden uns persönlich innerhalb von 24 Stunden.
              </p>
              <div className="mt-8"><Badges items={['Persönliche Beratung', 'Unverbindlicher Erstkontakt', 'Probebetrieb auf 4.000 m²']} /></div>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-ink">Wie können wir Sie erreichen?</h2>
              <p className="text-gray-600 mt-3 mb-8">Wir melden uns persönlich, um einen gemeinsamen Erst-Termin auszumachen.</p>
              <ContactForm />
            </div>
          </div>
        </Shell>
      </main>
      <Footer />
    </>
  )
}
