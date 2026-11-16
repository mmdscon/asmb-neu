'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

const col = 'text-sm font-semibold uppercase tracking-[.14em] text-white mb-7'
const link = 'text-gray-400 hover:text-accent transition-colors'

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-gray-400 text-sm border-t-4 border-accent">
      <div className="wrap pt-20 pb-16 md:pt-28 md:pb-20 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="inline-block bg-white rounded-md px-3 py-2">
            <Image src="/images/asmb.png" alt="ASMB Allg. Sondermaschinenbau" width={120} height={48} className="h-10 w-auto" />
          </div>
          <p className="mt-8 max-w-xs leading-relaxed">
            Maßgeschneiderte Sondermaschinen aus Marz, Österreich. Vollständige Wertschöpfungskette aus einer Hand – familiengeführt in 2. Generation.
          </p>
          <Link href="/#quiz" className="btn mt-9 !py-2.5">Kostenlos anfragen <ArrowRight size={16} /></Link>
        </div>

        <div>
          <h3 className={col}>Kontakt</h3>
          <ul className="space-y-5">
            <li className="flex gap-3"><MapPin size={18} className="text-accent shrink-0 mt-0.5" /><span>ASMB Sondermaschinenbau<br />Gewerbepark 1<br />A-7221 Marz, Österreich</span></li>
            <li className="flex gap-3"><Phone size={18} className="text-accent shrink-0 mt-0.5" /><a className={link} href="tel:+43262663951">+43 2626 63951-0</a></li>
            <li className="flex gap-3"><Mail size={18} className="text-accent shrink-0 mt-0.5" /><a className={link} href="mailto:info@sut.at">info@sut.at</a></li>
          </ul>
        </div>

        <div>
          <h3 className={col}>Navigation</h3>
          <ul className="space-y-4">
            <li><Link className={link} href="/#quiz">Anfrage starten</Link></li>
            <li><Link className={link} href="/#kompetenz">Kernkompetenz</Link></li>
            <li><Link className={link} href="/#vorteile">Ihre Vorteile</Link></li>
            <li><Link className={link} href="/#referenzen">Referenzen</Link></li>
            <li><Link className={link} href="/#ueber-uns">Über uns</Link></li>
          </ul>
        </div>

        <div>
          <h3 className={col}>Rechtliches &amp; Gruppe</h3>
          <ul className="space-y-4">
            <li><a className={link} href="https://sut.at/impressum" target="_blank" rel="noopener noreferrer">Impressum</a></li>
            <li><a className={link} href="https://sut.at/datenschutz" target="_blank" rel="noopener noreferrer">Datenschutz</a></li>
            <li><button className={link} onClick={() => { try { localStorage.removeItem('sut-cookie-consent') } catch {} location.reload() }}>Cookie-Einstellungen</button></li>
            <li className="pt-2 text-gray-500">Die Sinawehl Group</li>
            <li><a className={link} href="https://sut.at" target="_blank" rel="noopener noreferrer">sut.at</a></li>
            <li><a className={link} href="https://sinawehl-prio.at" target="_blank" rel="noopener noreferrer">sinawehl-prio.at</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap py-8 flex flex-col sm:flex-row gap-2 justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} ASMB Sondermaschinenbau. Alle Rechte vorbehalten.</p>
          <p>Gewerbepark 1, A-7221 Marz, Österreich</p>
        </div>
      </div>
    </footer>
  )
}
