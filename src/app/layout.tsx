import type { Metadata } from 'next'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'
import MetaPixel from '@/components/MetaPixel'

export const metadata: Metadata = {
  title: 'ASMB Sondermaschinenbau – Kostenlos anfragen',
  description: 'Maßgeschneiderte Sondermaschinen aus Marz, Österreich. In zwei Fragen zur unverbindlichen Erstberatung – 20+ Jahre Erfahrung, 100+ Projekte.',
  openGraph: {
    title: 'ASMB Sondermaschinenbau – Kostenlos anfragen',
    description: 'In zwei Fragen zur unverbindlichen Erstberatung.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <MetaPixel />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
