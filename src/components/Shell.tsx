import Image from 'next/image'

/** Vollflächiger Funnel-Hintergrund im ASMB-Hero-Stil */
export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative bg-[#1a1a1a] overflow-hidden">
      <Image src="/images/asmb-hero1.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
      <div className="relative wrap py-14 md:py-24 min-h-[60vh]">{children}</div>
    </section>
  )
}
