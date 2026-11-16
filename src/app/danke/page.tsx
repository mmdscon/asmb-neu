import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = { title: 'Vielen Dank – ASMB Sondermaschinenbau' }

export default function Danke() {
  return (
    <>
      <Header cta={false} />
      <main className="wrap">
        <div className="rounded-[2rem] md:rounded-[2.5rem] bg-ink text-white p-8 md:p-16 text-center">
          <CheckCircle className="mx-auto text-accent" size={56} />
          <h1 className="mt-6 text-3xl md:text-5xl font-bold">Vielen Dank – Ihre Anfrage ist angekommen.</h1>
          <p className="mt-5 text-white/80 text-lg max-w-xl mx-auto">Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen, um Ihr Projekt zu besprechen.</p>
          <Link href="/" className="btn mt-8">Zur Startseite</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
