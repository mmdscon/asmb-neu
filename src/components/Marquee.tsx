import Image from 'next/image'

const LOGOS: [string, string][] = [
  ['manner', 'Manner'], ['kellys', "Kelly's"], ['semperit', 'Semperit'], ['dynacast', 'Dynacast'], ['ardo', 'Ardo'],
  ['supervac', 'Supervac'], ['popcorner', 'Popcorner'], ['zuckerlwerkstatt', 'Zuckerlwerkstatt'], ['edm', 'EDM'],
  ['veggiemeat', 'Veggie Meat'], ['kuchenpeter', 'Kuchen Peter'], ['arovit', 'Arovit'], ['koenig', 'König'],
  ['habasit', 'Habasit'], ['volta', 'Volta'], ['mars', 'Mars'], ['bdspack', 'BDS Pack'], ['bioquelle', 'Bioquelle'],
  ['bertschlaska', 'Bertsch Laska'], ['heinzelpaper', 'Heinzel Paper'], ['multivac', 'Multivac'],
]

export default function Marquee() {
  const row = [...LOGOS, ...LOGOS]
  return (
    <div className="overflow-hidden" aria-label="Referenzkunden">
      <div className="marquee flex w-max gap-6 items-center">
        {row.map(([f, alt], i) => (
          <div key={i} className="bg-white border border-[var(--border)] w-44 h-24 flex items-center justify-center p-3 shrink-0">
            <Image src={`/images/referenz_${f}.jpg`} alt={alt} width={140} height={60} className="max-h-full w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}
