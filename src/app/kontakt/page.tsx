import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Badges from '@/components/Badges'
import ContactForm from '@/components/ContactForm'

export const metadata = { title: 'Kostenlos anfragen – ASMB Sondermaschinenbau' }

export default function Kontakt() {
  return (
    <>
      <Header cta={false} />
      <main className="wrap">
        <div className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden grid md:grid-cols-2 bg-white">
          <div className="bg-ink text-white p-6 md:p-12 flex flex-col">
            <Link href="/frage-2" className="inline-flex items-center gap-2 text-sm underline underline-offset-4 text-white/85 mb-8"><ArrowLeft size={14} /> Zurück zu Frage 2</Link>
            <h1 className="text-3xl md:text-5xl font-bold leading-[1.08]">Ihre Anlage nimmt Form an.</h1>
            <p className="mt-5 text-white/80 text-lg">
              Sie sind einen Schritt davon entfernt, Ihr Projekt mit einem Team zu besprechen, das 100+ Anlagen realisiert hat. Wir melden uns persönlich innerhalb von 24 Stunden.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 bg-white">
                <Image src="/images/asmb.png" alt="ASMB" fill sizes="64px" className="object-contain p-1" />
              </div>
              <div><p className="font-bold">ASMB Sondermaschinenbau</p><p className="text-white/70 text-sm">Vor Ort für Sie in Marz, Burgenland</p></div>
            </div>
            <div className="mt-6"><Badges items={['Persönliche Beratung', 'Unverbindlicher Erstkontakt', 'Probebetrieb auf 4.000 m²']} /></div>
          </div>
          <div className="p-6 md:p-12 md:pt-14">
            <h2 className="text-3xl font-bold">Wie können wir Sie erreichen?</h2>
            <p className="text-stone-600 mt-3 mb-8">Wir melden uns persönlich, um einen gemeinsamen Erst-Termin auszumachen.</p>
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
