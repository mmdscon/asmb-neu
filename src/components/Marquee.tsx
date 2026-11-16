import Image from 'next/image'

// [Logo-Datei oder null, Name] – ohne Datei wird der Name als Schriftzug gezeigt
const LOGOS: [string | null, string][] = [
  ['manner', 'Manner'], ['kellys', 'Kelly’s'], ['semperit', 'Semperit'], ['dynacast', 'Dynacast'], ['ardo', 'Ardo'],
  ['supervac', 'Supervac'], ['popcorner', 'Popcorner'], ['zuckerlwerkstatt', 'Zuckerlwerkstatt'], ['edm', 'EDM'],
  ['veggiemeat', 'Veggie Meat'], ['kuchenpeter', 'Kuchen Peter'], ['arovit', 'Arovit'], ['koenig', 'König'],
  ['mars', 'Mars'], ['bioquelle', 'Bioquelle'], ['bertschlaska', 'Bertsch Laska'], ['heinzelpaper', 'Heinzel Paper'],
  ['multivac', 'Multivac'], [null, 'Wienerberger'], [null, 'Castelletto'], [null, 'Rittersport'], [null, 'Maba'],
  [null, 'TSF-A'],
]

export default function Marquee() {
  const row = [...LOGOS, ...LOGOS]
  return (
    <div className="overflow-hidden" aria-label="Referenzkunden">
      <div className="marquee flex w-max gap-6 items-center">
        {row.map(([f, alt], i) => (
          <div key={i} className="bg-white border border-[var(--border)] w-44 h-24 flex items-center justify-center p-3 shrink-0">
            {f ? (
              <Image src={`/images/referenz_${f}.jpg`} alt={alt} width={140} height={60} className="max-h-full w-auto object-contain" />
            ) : (
              <span className="text-lg font-bold uppercase tracking-wide text-[#4a4a4a]">{alt}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
