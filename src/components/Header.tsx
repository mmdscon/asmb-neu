import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function Header({ cta = true }: { cta?: boolean }) {
  return (
    <header className="wrap flex items-center justify-between py-4 md:py-6">
      <Link href="/" aria-label="ASMB Startseite">
        <Image src="/images/asmb.png" alt="ASMB Allg. Sondermaschinenbau" width={140} height={56} priority className="h-10 md:h-12 w-auto" />
      </Link>
      {cta && (
        <Link href="/#quiz" className="btn btn-dark !py-3">Jetzt anfragen <ArrowUpRight size={16} /></Link>
      )}
    </header>
  )
}
