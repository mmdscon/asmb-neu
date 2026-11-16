import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Shell from '@/components/Shell'

export const metadata = { title: 'Vielen Dank – ASMB Sondermaschinenbau' }

export default function Danke() {
  return (
    <>
      <Header cta={false} />
      <main>
        <Shell>
          <div className="text-center text-white max-w-2xl mx-auto py-8 rise">
            <CheckCircle className="mx-auto text-accent" size={60} />
            <h1 className="mt-8 text-3xl md:text-5xl font-bold uppercase tracking-wide">Vielen Dank!</h1>
            <p className="mt-6 text-lg text-white/80">Ihre Anfrage ist angekommen. Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen, um Ihr Projekt zu besprechen.</p>
            <div className="mt-10"><Link href="/" className="btn">Zur Startseite</Link></div>
          </div>
        </Shell>
      </main>
      <Footer />
    </>
  )
}
