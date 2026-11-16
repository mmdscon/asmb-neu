import { Check } from 'lucide-react'

export default function Badges({ items, dark = true }: { items: string[]; dark?: boolean }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${dark ? 'text-white' : 'text-ink'}`}>
      {items.map((t) => (
        <li key={t} className={`badge ${dark ? '' : 'badge-dark'}`}><Check size={14} /> {t}</li>
      ))}
    </ul>
  )
}
