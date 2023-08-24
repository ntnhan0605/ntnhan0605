import LogoSvg from '@/components/icons/logo.svg'
import { FC } from 'react'
import { StyledLogo } from './Logo.styled'

export type LogoProps = {
  href?: string
}
export const Logo: FC<LogoProps> = (props) => {
  const { href } = props
  return (
    <StyledLogo href={href || '/'}>
      <LogoSvg />
    </StyledLogo>
  )
}
