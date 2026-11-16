import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { asset } from '@/lib/base'

export default function Header({ cta = true }: { cta?: boolean }) {
  return (
    <>
      <div className="bg-accent text-white text-center text-sm font-medium py-2 px-4">
        Familiengeführt in 2. Generation: Ihr Partner im Sondermaschinenbau.
      </div>
      <header className="bg-white border-b border-[var(--border)]">
        <div className="wrap flex items-center justify-between h-20">
          <Link href="/" aria-label="ASMB Startseite">
            <Image src={asset('/images/asmb.png')} alt="ASMB Allg. Sondermaschinenbau" width={140} height={56} priority className="h-12 w-auto" />
          </Link>
          {cta && <Link href="/#quiz" className="btn !py-2.5">Jetzt anfragen <ArrowRight size={16} /></Link>}
        </div>
      </header>
    </>
  )
}
