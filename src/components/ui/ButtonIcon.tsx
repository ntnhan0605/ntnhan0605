import { cn } from '#/lib/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes, FC } from 'react'
import { Icon, type IconProps } from './Icon'

const buttonIconVariants = cva(
  [
    'flex flex-col items-center',
    'opacity-85 hover:opacity-100',
    'text-paper-white',
    'cursor-pointer',
  ],
  {
    variants: {
      size: {
        sm: 'gap-0.5 text-[.72rem]',
        xs: 'gap-1 text-[.72rem]',
        md: 'gap-1.5 text-[.72rem]', // Default
        lg: 'gap-2 text-[.8rem]',
        xl: 'gap-2.5 text-[.92rem]',
        xxl: 'gap-3 text-base',
      },
    },
    defaultVariants: { size: 'md' },
  },
)

const iconVariants = cva(
  [
    'grid size-10 place-items-center rounded-full',
    'border border-slate-50/22 bg-slate-50/16',
  ],
  {
    variants: {
      size: {
        xs: 'size-2',
        sm: 'size-4',
        md: 'size-10',
        lg: 'size-16',
        xl: 'size-22',
        xxl: 'size-28',
      },
      defaultVariants: { size: 'md' },
    },
  },
)

export type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonIconVariants> & {
    name: IconProps['name']
  }

export const ButtonIcon: FC<ButtonIconProps> = ({
  size,
  name,
  children,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      {...props}
      className={cn('ButtonIcon', buttonIconVariants({ size }), className)}
    >
      <span
        className={cn('ButtonIcon--icon_container', iconVariants({ size }))}
      >
        <Icon name={name} size={size} className="ButtonIcon--icon" />
      </span>
      {children}
    </button>
  )
}
