import { CSSProperties, FC, lazy } from 'react'

const IconComponents = {
  logo: lazy(async () => await import('@/icons/logo.svg')),
  lookup: lazy(async () => await import('@/icons/lookup.svg')),
  account: lazy(async () => await import('@/icons/account.svg')),
  cart: lazy(async () => await import('@/icons/cart.svg')),
  heart: lazy(async () => await import('@/icons/heart.svg')),
  youtube: lazy(async () => await import('@/icons/youtube.svg')),
  twitter: lazy(async () => await import('@/icons/twitter.svg')),
  instagram: lazy(async () => await import('@/icons/instagram.svg')),
  facebook: lazy(async () => await import('@/icons/facebook.svg')),
  visa: lazy(async () => await import('@/icons/visa.svg')),
  amex: lazy(async () => await import('@/icons/amex.svg')),
  mastercard: lazy(async () => await import('@/icons/mastercard.svg')),
  paypal: lazy(async () => await import('@/icons/paypal.svg')),
  discover: lazy(async () => await import('@/icons/discover.svg')),
  'diners-club': lazy(async () => await import('@/icons/diners-club.svg'))
}

export type IconName = keyof typeof IconComponents

export type IconProps = {
  name: IconName
  size?: number
  className?: string
  style?: CSSProperties
}
export const Icon: FC<IconProps> = (props) => {
  const { name, size, className, style } = props
  const IconComponent = IconComponents[name]
  if (!IconComponent) return null
  return (
    <IconComponent
      className={className}
      style={size ? { ...style, width: size, height: size } : { ...style }}
    />
  )
}
