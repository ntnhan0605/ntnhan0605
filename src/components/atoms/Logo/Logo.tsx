import Link from 'next/link'
import { FC } from 'react'
import { IconComponent } from '../IconComponent'

export type LogoProps = {
  href?: string
}
export const Logo: FC<LogoProps> = (props) => {
  const { href } = props
  return (
    <Link href={href || '/'}>
      <IconComponent name="lookup" />
    </Link>
  )
}
