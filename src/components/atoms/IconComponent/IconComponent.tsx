import { CSSProperties, FC, lazy } from 'react'

const IconComponents = {
  logo: lazy(async () => await import('@/icons/logo.svg')),
  lookup: lazy(async () => await import('@/icons/lookup.svg'))
}

type IconName = keyof typeof IconComponents

export type IconComponentProps = {
  name: IconName
  size?: number
  className?: string
  style?: CSSProperties
}
export const IconComponent: FC<IconComponentProps> = (props) => {
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
