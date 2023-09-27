import {
  DetailedHTMLProps,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef
} from 'react'
import { IconComponent } from '../Icon'
import styles from './FormSearch.module.scss'

export type FormSearchProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
const FormSearchWithouRef: ForwardRefRenderFunction<
  HTMLInputElement,
  FormSearchProps
> = (props, ref) => {
  return (
    <form action="/" method="GET" className={styles.form}>
      <button type="submit" className={styles.button}>
        <IconComponent name="lookup" className={styles.icon} />
      </button>
      <input
        name="s"
        placeholder="Tìm kiếm..."
        {...props}
        ref={ref}
        className={styles.input}
      />
    </form>
  )
}

export const FormSearch = forwardRef(FormSearchWithouRef)
