import clsx from 'clsx'
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef
} from 'react'
import { InputComponent, InputComponentProps } from '../InputComponent'
import styles from '../InputComponent.module.scss'

export type InputRef = LegacyRef<HTMLInputElement>
export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  Omit<InputComponentProps, 'children'>

const InputWithoutRef = (props: InputProps, ref?: InputRef) => {
  const { error, containerClass, containerStyle, className, ...restProps } =
    props

  return (
    <InputComponent
      error={error}
      containerClass={containerClass}
      containerStyle={containerStyle}>
      <input
        ref={ref}
        className={clsx(styles.input, className)}
        {...restProps}
      />
    </InputComponent>
  )
}
export const Input = forwardRef(InputWithoutRef)
