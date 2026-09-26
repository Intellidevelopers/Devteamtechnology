interface Props {
  text: string

  className?: string

  center?: boolean
}

export default function SectionLabel({
  text,
  className = "",
  center = false,
}: Props) {
  return (
    <div
      className={`flex items-center gap-2 ${
        center ? "justify-center" : ""
      } ${className}`}
    >
      <span className="text-orange font-bold text-sm leading-none" aria-hidden>
        →
      </span>
      <span className="text-orange font-semibold text-[11px] tracking-[0.18em] uppercase">
        {text}
      </span>
    </div>
  )
}
