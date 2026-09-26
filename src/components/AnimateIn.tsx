import type { ReactNode, CSSProperties } from 'react'
import { useInView } from '../hooks/useInView'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  from?: 'bottom' | 'left' | 'right' | 'none'
}

const initialTransform: Record<NonNullable<Props['from']>, string> = {
  bottom: 'translateY(28px)',
  left: 'translateX(-28px)',
  right: 'translateX(28px)',
  none: 'none',
}

export default function AnimateIn({
  children,
  className = '',
  delay = 0,
  from = 'bottom',
}: Props) {
  const { ref, inView } = useInView(0.1)

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transition: 'opacity 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : initialTransform[from],
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
