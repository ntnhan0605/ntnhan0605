import { cn } from '#/lib/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes, FC } from 'react'
import { Icon, type IconName } from './Icon'

const avatarVariants = cva(
  [
    'grid place-items-center',
    'rounded-full overflow-hidden border border-paper-white-translucent-strong',
    'text-paper-white bg-paper-white-translucent',
    'shadow cursor-pointer ',
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
    },
    defaultVariants: { size: 'md' },
  },
)

export type AvatarProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof avatarVariants> & {
    icon?: IconName
    iconSize?: AvatarProps['size']
  }

export const Avatar: FC<AvatarProps> = ({
  children,
  icon,
  size,
  className,
  ...props
}) => {
  const isIcon = !children

  return (
    <span {...props} className={cn(avatarVariants({ size }), className)}>
      {isIcon && <Icon name={icon || 'guest'} className="w-1/2 h-1/2" />}
      {children}
    </span>
  )
}
