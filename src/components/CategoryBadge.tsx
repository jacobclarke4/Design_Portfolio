interface Props {
  number: number
  label: string
  accentColor: string
}

export default function CategoryBadge({ number, label, accentColor }: Props) {
  const num = String(number).padStart(2, '0')
  return (
    <div className="inline-flex items-center gap-2.5">
      {/* Filled circle */}
      <span
        className="inline-flex items-center justify-center w-9 h-9 rounded-full text-white text-[13px] font-semibold shrink-0"
        style={{ backgroundColor: accentColor }}
      >
        {num}
      </span>

      {/* Label chip */}
      <span
        className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap"
        style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
      >
        {label}
      </span>
    </div>
  )
}
