import { CSSProperties, FC, lazy } from 'react'

const IconComponents = {
  logo: lazy(async () => await import('@/icons/logo.svg')),
  lookup: lazy(async () => await import('@/icons/lookup.svg'))
}

type IconName = keyof typeof IconComponents

export type IconComponentProps = {
  name: IconName
  size?: number
  style?: CSSProperties
}
export const IconComponent: FC<IconComponentProps> = (props) => {
  const { name, size, style } = props
  const IconComponent = IconComponents[name]
  if (!IconComponent) return null
  return (
    <IconComponent
      style={size ? { ...style, width: size, height: size } : { ...style }}
    />
  )
}
