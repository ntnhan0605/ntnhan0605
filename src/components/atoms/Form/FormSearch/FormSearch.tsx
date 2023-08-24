import Lookup from '@/components/icons/lookup.svg'
import {
  DetailedHTMLProps,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef
} from 'react'
import { StyledButton, StyledForm, StyledInput } from './FormSearch.styled'

export type FormSearchProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
const FormSearchWithouRef: ForwardRefRenderFunction<
  HTMLInputElement,
  FormSearchProps
> = (props, ref) => {
  return (
    <StyledForm action="/" method="GET">
      <StyledButton type="submit" size="small">
        <Lookup />
      </StyledButton>
      <StyledInput name="s" placeholder="Tìm kiếm..." {...props} ref={ref} />
    </StyledForm>
  )
}

export const FormSearch = forwardRef(FormSearchWithouRef)
