'use client'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 text-sm">
      <div className="wrap py-14 text-center space-y-4">
        <p className="space-x-4">
          <a className="hover:text-white" href="https://sut.at/impressum" target="_blank" rel="noopener noreferrer">Impressum</a>
          <a className="hover:text-white" href="https://sut.at/datenschutz" target="_blank" rel="noopener noreferrer">Datenschutz</a>
          <button className="hover:text-white" onClick={() => { try { localStorage.removeItem('sut-cookie-consent') } catch {} location.reload() }}>Cookie-Einstellungen</button>
        </p>
        <p>© {new Date().getFullYear()} ASMB Sondermaschinenbau · Gewerbepark 1, A-7221 Marz, Österreich · Alle Rechte vorbehalten</p>
      </div>
    </footer>
  )
}
