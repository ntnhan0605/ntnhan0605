import { forwardRef } from 'react'
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { StyledButton } from './index.styled'

export type ButtonProps = MuiButtonProps
export const Button = forwardRef(function (
  props: ButtonProps,
  ref: React.ForwardedRef<any>
) {
  const { children, ...restProps } = props
  return (
    <StyledButton {...restProps} ref={ref}>
      {children}
      <span className="btn-top"></span>
      <span className="btn-bottom"></span>
      <span className="btn-left"></span>
      <span className="btn-right"></span>
    </StyledButton>
  )
})
