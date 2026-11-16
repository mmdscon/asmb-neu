'use client'

import { useState, useEffect } from 'react'
import { Cookie, X, Check, Settings } from 'lucide-react'

type ConsentState = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const stored = localStorage.getItem('sut-cookie-consent')
    if (!stored) {
      setTimeout(() => setVisible(true), 1500)
    }
  }, [])

  const saveConsent = (c: ConsentState) => {
    localStorage.setItem('sut-cookie-consent', JSON.stringify({ ...c, timestamp: new Date().toISOString() }))
    setVisible(false)
    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('cookieConsent', { detail: c }))
  }

  const acceptAll = () => {
    const all = { necessary: true, analytics: true, marketing: true }
    setConsent(all)
    saveConsent(all)
  }

  const acceptNecessary = () => {
    const min = { necessary: true, analytics: false, marketing: false }
    setConsent(min)
    saveConsent(min)
  }

  const saveCustom = () => {
    saveConsent(consent)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] p-4 md:p-6">
      <div
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <Cookie className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#Fd7C26' }} />
            <div>
              <h3 className="font-bold text-gray-900 text-lg leading-snug">
                Wir verwenden Cookies
              </h3>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                Wir setzen Cookies ein, um Ihnen die bestmögliche Nutzererfahrung zu bieten.
                Technisch notwendige Cookies sind stets aktiv. Sie können selbst entscheiden,
                welche weiteren Kategorien Sie zulassen möchten.
              </p>
            </div>
          </div>

          {/* Details */}
          {showDetails && (
            <div className="border border-gray-100 rounded-xl p-4 mb-4 flex flex-col gap-3 bg-gray-50">
              {/* Necessary */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-gray-800">Notwendig</p>
                  <p className="text-xs text-gray-500">Session, Sicherheit, Funktionalität</p>
                </div>
                <div className="w-10 h-6 rounded-full flex-shrink-0 flex items-center px-1" style={{ backgroundColor: '#Fd7C26' }}>
                  <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-gray-800">Analyse</p>
                  <p className="text-xs text-gray-500">Nutzungsstatistiken (anonym)</p>
                </div>
                <button
                  onClick={() => setConsent(c => ({ ...c, analytics: !c.analytics }))}
                  className="w-10 h-6 rounded-full flex-shrink-0 flex items-center px-1 transition-colors"
                  style={{ backgroundColor: consent.analytics ? '#Fd7C26' : '#d1d5db' }}
                  aria-label="Analyse cookies umschalten"
                >
                  <div
                    className="w-4 h-4 bg-white rounded-full transition-transform"
                    style={{ transform: consent.analytics ? 'translateX(16px)' : 'translateX(0)' }}
                  />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-gray-800">Marketing</p>
                  <p className="text-xs text-gray-500">Personalisierte Werbung (Meta Pixel)</p>
                </div>
                <button
                  onClick={() => setConsent(c => ({ ...c, marketing: !c.marketing }))}
                  className="w-10 h-6 rounded-full flex-shrink-0 flex items-center px-1 transition-colors"
                  style={{ backgroundColor: consent.marketing ? '#Fd7C26' : '#d1d5db' }}
                  aria-label="Marketing cookies umschalten"
                >
                  <div
                    className="w-4 h-4 bg-white rounded-full transition-transform"
                    style={{ transform: consent.marketing ? 'translateX(16px)' : 'translateX(0)' }}
                  />
                </button>
              </div>
            </div>
          )}

          <p className="text-xs text-gray-400 mb-4">
            Mehr Informationen in unserer{' '}
            <a
              href="https://sut.at/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600"
            >
              Datenschutzerklärung
            </a>
            .
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <button onClick={acceptAll} className="btn-glass flex items-center gap-2 text-sm">
              <Check className="w-4 h-4" />
              Alle akzeptieren
            </button>
            <button
              onClick={acceptNecessary}
              className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 text-sm font-semibold hover:border-gray-400 transition-colors"
            >
              Nur notwendige
            </button>
            {showDetails ? (
              <button
                onClick={saveCustom}
                className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 text-sm font-semibold hover:border-gray-400 transition-colors"
              >
                Auswahl speichern
              </button>
            ) : (
              <button
                onClick={() => setShowDetails(true)}
                className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-600 text-sm font-medium hover:border-gray-400 transition-colors flex items-center gap-1.5"
              >
                <Settings className="w-3.5 h-3.5" />
                Einstellungen
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
