import { Check } from 'lucide-react'

export default function Badges({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((t) => (
        <li key={t} className="badge"><Check size={14} /> {t}</li>
      ))}
    </ul>
  )
}
