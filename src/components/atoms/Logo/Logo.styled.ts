import { styled } from '@mui/material/styles'
import Link from 'next/link'

export const StyledLogo = styled(Link)(({ theme }) => ({
  fontSize: theme.spacing(58)
}))
