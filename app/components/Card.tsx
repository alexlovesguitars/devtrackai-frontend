import { Check } from 'lucide-react'

type CardProps = {
  title: string
  items: string[]
  className?: string
  style?: React.CSSProperties
}

export function Card({ title, items, className, style }: CardProps) {
  return (
    <div
      className={`flex flex-col items-start justify-center font-sans bg-card-background text-foreground w-full m-auto border-2 border-border rounded-lg px-6 py-2 ${className ?? ''}`}
      style={style}
    >
      <p className="tracking-tight font-bold m-auto my-4">
        {title}
      </p>
      <div className="m-auto">
        <ul className="text-xs text-muted-foreground w-full leading-6 mb-4">
          {items.map((item, i) => (
            <li
              key={item}
              className="animate-slide-in flex items-center"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Check className="w-4 h-4 mr-3 text-gradient-from shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
