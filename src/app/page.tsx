import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Ruler, Leaf, Gauge, ShieldCheck, Truck, Award } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Quiz from '@/components/Quiz'
import Badges from '@/components/Badges'
import Marquee from '@/components/Marquee'
import { Q1 } from '@/lib/quiz'

const VORTEILE = [
  { Icon: Ruler, t: 'Auf Maß gebaut', d: 'Individuell auf Ihre Anforderungen geplant' },
  { Icon: Leaf, t: 'Ressourcenschonend', d: 'Maximale Ausbeute verwertbarer Fraktionen' },
  { Icon: Gauge, t: 'Hohe Durchsatzleistung', d: 'Effizient und leistungsstark im Dauerbetrieb' },
  { Icon: ShieldCheck, t: 'Robuste Konstruktion', d: 'Langlebig auch bei harten Bedingungen' },
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
        <section id="quiz" className="relative bg-[#1a1a1a] overflow-hidden scroll-mt-0">
          <video src="/images/asmb-hero-neu-3.mp4" poster="/images/asmb-hero1.jpg" autoPlay loop muted playsInline preload="metadata"
            className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/90" />
          <div className="relative wrap py-12 md:py-16">
            <div className="max-w-4xl rise">
              <h1 className="text-white font-bold uppercase tracking-wide leading-[1.05] text-[clamp(1.9rem,4.2vw,3.5rem)]">
                Ihre nächste Anlage<br /><span className="text-accent font-black">individuell gebaut.</span>
              </h1>
              <p className="mt-5 text-lg text-white/80 max-w-2xl">
                Von der Planung bis zur Inbetriebnahme aus einer Hand – in zwei kurzen Fragen zur unverbindlichen Erstberatung.
              </p>
              <div className="mt-6"><Badges items={['Sondermaschinenbau', 'Maßgeschneiderte Lösungen', 'Kostenlose Erstberatung']} /></div>
            </div>
            <div className="mt-10 md:mt-12"><Quiz step={1} title={Q1.title} options={Q1.options} next="/frage-2" /></div>
          </div>
        </section>

        {/* Kennzahlen */}
        <section className="bg-white border-b border-[var(--border)]">
          <div className="wrap grid grid-cols-2 md:grid-cols-4">
            {KPIS.map(([n, l], i) => (
              <div key={l} className={`py-10 md:py-12 text-center ${i % 2 ? 'border-l' : ''} ${i > 1 ? 'border-t md:border-t-0' : ''} ${i > 0 ? 'md:border-l' : ''} border-[var(--border)]`}>
                <p className="text-4xl md:text-5xl font-black text-accent">{n}</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-gray-600">{l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kernkompetenz */}
        <section id="kompetenz" className="section bg-white scroll-mt-4">
          <div className="wrap">
            <div className="card grid md:grid-cols-2">
              <div className="p-8 md:p-14 flex flex-col justify-center">
                <p className="eyebrow">Unsere Kernkompetenz</p>
                <h2 className="h2">Wirtschaftliche Automatisierung aus einer Hand.</h2>
                <p className="lead mt-6">
                  Von der Bedarfsanalyse über Konstruktion und Fertigung bis zur Montage vor Ort. Vorab nehmen wir Ihre Anlage bei uns im Probebetrieb in Betrieb,
                  damit vor Ort alles reibungslos klappt.
                </p>
                <div className="mt-8"><Link href="#quiz" className="btn">Projekt besprechen <ArrowRight size={16} /></Link></div>
              </div>
              <div className="relative min-h-[300px] md:min-h-[460px] border-t md:border-t-0 md:border-l border-[var(--border)]">
                <Image src="/images/neue2.jpg" alt="Roboter in der ASMB-Fertigung" fill sizes="(min-width:768px) 560px, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section id="vorteile" className="section bg-[var(--gray)] scroll-mt-4">
          <div className="wrap">
            <div className="max-w-2xl mb-12 md:mb-14">
              <p className="eyebrow">Ihre Vorteile</p>
              <h2 className="h2">Was uns auszeichnet</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VORTEILE.map(({ Icon, t, d }) => (
                <div key={t} className="card p-8">
                  <Icon className="text-accent mb-6" size={34} strokeWidth={1.5} />
                  <h3 className="font-bold text-lg uppercase tracking-wide text-ink">{t}</h3>
                  <p className="mt-2 text-gray-600">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Referenzen */}
        <section id="referenzen" className="section bg-white scroll-mt-4">
          <div className="wrap mb-12 md:mb-14">
            <p className="eyebrow">Vertrauen</p>
            <h2 className="h2">Unsere Referenzkunden</h2>
          </div>
          <Marquee />
        </section>

        {/* Über uns + CTA */}
        <section id="ueber-uns" className="section bg-[var(--gray)] scroll-mt-4">
          <div className="wrap">
            <div className="card grid md:grid-cols-2">
              <div className="relative min-h-[300px] md:min-h-[440px]">
                <Image src="/images/kernkompetenz.jpg" alt="ASMB-Team bei der Arbeit in der Fertigung" fill sizes="(min-width:768px) 560px, 100vw" className="object-cover" />
              </div>
              <div className="p-8 md:p-14 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[var(--border)]">
                <p className="eyebrow">Über uns</p>
                <h2 className="h2">Maschinen, die begeistern.</h2>
                <p className="lead mt-6">
                  Bei uns steht der Mensch im Mittelpunkt – unsere Kunden und unsere Mitarbeiter. Jede Maschine, die wir bauen, ist ein Versprechen. Dafür stehen wir persönlich ein.
                </p>
                <p className="mt-4 text-sm text-gray-500">ASMB Sondermaschinenbau · Gewerbepark 1 · A-7221 Marz</p>
                <div className="mt-8"><Link href="#quiz" className="btn">Kostenlos anfragen <ArrowRight size={16} /></Link></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
