import Typography from '@mui/material/Typography'
import { FC, ReactNode } from 'react'

export type TitleProps = {
  children?: ReactNode
}

export const Title: FC<TitleProps> = (props) => {
  const { children } = props
  return <Typography>{children}</Typography>
}
