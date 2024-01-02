import clsx from 'clsx'
import {
  DetailedHTMLProps,
  LegacyRef,
  TextareaHTMLAttributes,
  forwardRef
} from 'react'
import { InputComponent, InputComponentProps } from '../InputComponent'
import styles from '../InputComponent.module.scss'

export type TextareaRef = LegacyRef<HTMLTextAreaElement>
export type TextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  Omit<InputComponentProps, 'children'>

const TextAreaWithoutRef = (props: TextareaProps, ref?: TextareaRef) => {
  const { error, containerClass, containerStyle, className, ...restProps } =
    props

  return (
    <InputComponent
      error={error}
      containerClass={containerClass}
      containerStyle={containerStyle}>
      <textarea
        ref={ref}
        className={clsx(styles.input, className)}
        {...restProps}
      />
    </InputComponent>
  )
}
export const TextArea = forwardRef(TextAreaWithoutRef)
