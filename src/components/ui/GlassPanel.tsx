import { cn } from '#/lib/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import type { FC, HTMLAttributes } from 'react'

const glassPanelVariants = cva([], {
  variants: {
    intensity: {
      subtle: 'bg-slate-50/10 border-slate-50/16',
      default: 'bg-slate-50/16 border-slate-50/22 backdrop-blur-[26px]',
      strong: 'bg-slate-50/24 border-slate-50/34 backdrop-blur-2xl',
    },
  },
  defaultVariants: { intensity: 'default' },
})

export type GlassPanelProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof glassPanelVariants>

export const GlassPanel: FC<GlassPanelProps> = ({
  intensity,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'border border-slate-50/22 bg-slate-50/16',
        'backdrop-blur-[26px] backdrop-saturate-125',
        'shadow-[inset_0_1px_0_rgba(255,255,255,.15)]',
        glassPanelVariants({ intensity }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
