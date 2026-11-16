import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Ruler, Leaf, Gauge, ShieldCheck, Truck, Award } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Quiz from '@/components/Quiz'
import Badges from '@/components/Badges'
import Marquee from '@/components/Marquee'
import { Q1 } from '@/lib/quiz'

const VORTEILE = [
  { Icon: Ruler, t: 'Maßgeschneidert', d: 'Individuell auf Ihre Anforderungen geplant' },
  { Icon: Leaf, t: 'Ressourcenschonend', d: 'Maximale Ausbeute verwertbarer Fraktionen' },
  { Icon: Gauge, t: 'Hoher Durchsatz', d: 'Effizient und leistungsstark im Dauerbetrieb' },
  { Icon: ShieldCheck, t: 'Robust gebaut', d: 'Langlebig auch bei harten Bedingungen' },
  { Icon: Truck, t: 'Schnelle Lieferung', d: 'Termingerechte Montage und Inbetriebnahme' },
  { Icon: Award, t: 'Probebetrieb inklusive', d: 'Test auf über 4.000 m² eigener Fläche' },
]
const KPIS = [['20+', 'Jahre Erfahrung'], ['100+', 'Projekte realisiert'], ['15+', 'Länder beliefert'], ['24h', 'Service-Reaktionszeit']]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero + Frage 1 */}
        <section className="wrap" id="quiz">
          <div className="rounded-[2rem] md:rounded-[2.5rem] bg-[#FDE6D3] p-6 md:p-12">
            <h1 className="text-3xl md:text-6xl font-bold leading-[1.05] tracking-tight max-w-4xl">
              Wie Sie Ihre nächste <span className="bg-white/70 rounded-xl px-2 text-accent-dark">Sondermaschine</span> in Österreich
              {' '}maßgeschneidert und schlüsselfertig bekommen.
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink/75 max-w-2xl">
              Von der Planung bis zur Inbetriebnahme aus einer Hand – familiengeführt in 2. Generation, mit Probebetrieb auf eigener Fläche in Marz.
            </p>
            <div className="mt-5"><Badges dark={false} items={['Kostenlose Erstberatung', 'Unverbindlich', '100+ Projekte']} /></div>
            <hr className="my-8 border-ink/15" />
            <Quiz step={1} title={Q1.title} options={Q1.options} next="/frage-2" variant="light" />
          </div>
        </section>

        {/* Kennzahlen */}
        <section className="wrap mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {KPIS.map(([n, l]) => (
            <div key={l}><p className="text-4xl md:text-5xl font-black text-accent-dark">{n}</p><p className="text-sm text-ink/70 mt-1">{l}</p></div>
          ))}
        </section>

        {/* Wertversprechen */}
        <section className="wrap mt-20 grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-sm text-accent-dark mb-3">Unsere Kernkompetenz</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Wirtschaftliche Automatisierung – aus einer Hand.</h2>
            <p className="mt-5 text-lg text-ink/75">
              Von der Bedarfsanalyse über Konstruktion und Fertigung bis zur Montage vor Ort: Wir entwickeln Anlagen, die in Ihrer Produktion zuverlässig laufen –
              und nehmen sie bei uns vorab im Probebetrieb in Betrieb, damit vor Ort alles reibungslos klappt.
            </p>
            <Link href="#quiz" className="btn mt-7">Projekt starten <ArrowUpRight size={16} /></Link>
          </div>
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden">
            <Image src="/images/neue2.jpg" alt="Roboter in der ASMB-Fertigung" fill sizes="(min-width:768px) 560px, 100vw" className="object-cover" />
          </div>
        </section>

        {/* Vorteile */}
        <section className="wrap mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Was uns auszeichnet</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VORTEILE.map(({ Icon, t, d }) => (
              <div key={t} className="bg-white rounded-2xl p-6">
                <Icon className="text-accent-dark mb-4" size={30} strokeWidth={1.6} />
                <h3 className="font-bold text-lg">{t}</h3>
                <p className="text-ink/70 mt-1">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Referenzen */}
        <section className="mt-20">
          <h2 className="wrap text-2xl md:text-3xl font-bold mb-6">Unsere Referenzkunden</h2>
          <Marquee />
        </section>

        {/* Über uns + CTA */}
        <section className="wrap mt-20">
          <div className="rounded-[2rem] md:rounded-[2.5rem] bg-ink text-white overflow-hidden grid md:grid-cols-2">
            <div className="relative min-h-[260px]">
              <Image src="/images/asmb-titel.jpg" alt="Das ASMB-Team bei einer Auszeichnung" fill sizes="(min-width:768px) 600px, 100vw" className="object-cover" />
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold">Maschinen, die begeistern.</h2>
              <p className="mt-4 text-white/75">
                Bei uns steht der Mensch im Mittelpunkt – unsere Kunden und unsere Mitarbeiter. Jede Maschine, die wir bauen, ist ein Versprechen. Dafür stehen wir persönlich ein.
              </p>
              <p className="mt-4 text-sm text-white/60">ASMB Sondermaschinenbau · Gewerbepark 1 · A-7221 Marz</p>
              <Link href="#quiz" className="btn mt-7">Kostenlos anfragen <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
