import {
  DetailedHTMLProps,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef
} from 'react'
import { IconComponent } from '../../IconComponent/IconComponent'

export type FormSearchProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
const FormSearchWithouRef: ForwardRefRenderFunction<
  HTMLInputElement,
  FormSearchProps
> = (props, ref) => {
  return (
    <form action="/" method="GET">
      <button type="submit">
        <IconComponent name="lookup" />
      </button>
      <input name="s" placeholder="Tìm kiếm..." {...props} ref={ref} />
    </form>
  )
}

export const FormSearch = forwardRef(FormSearchWithouRef)
