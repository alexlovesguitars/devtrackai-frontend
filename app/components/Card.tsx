import { Check } from 'lucide-react'

type CardProps = {
  title: string
  items: string[]
}

export function Card({ title, items }: CardProps) {
  return (
    <div className="flex flex-col items-start justify-center font-sans bg-card-background text-foreground w-full m-auto border-2 border-border rounded-lg px-6 mx-2 py-2">
      <p className="tracking-tight font-bold m-auto my-4">
        {title}
      </p>
      <ul className="text-xs text-muted-foreground w-full leading-6 mb-4">
        {items.map((item) => (
          <li key={item} className="flex items-center">
            <Check className="w-4 h-4 mr-2 text-gradient-from shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
