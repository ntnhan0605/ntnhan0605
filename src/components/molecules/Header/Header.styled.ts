import { styled } from '@mui/material/styles'
import Link from 'next/link'

export const StyledHeaderLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 'inherit',
  ['&:hover']: {
    color: theme.palette.action.hover
  }
}))

export const StyledHeaderTop = styled('div')(({ theme }) => ({
  ...theme.typography.body2,
  height: theme?.spacing(35),
  display: 'flex',
  alignItems: 'center',
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  [`${theme.breakpoints.down('sm')}`]: {
    display: 'none'
  }
}))

export const StyledHeaderMiddleSearch = styled('div')(() => ({}))

export const StyledHeaderMiddleLogo = styled('div')(() => ({}))

export const StyledHeaderMiddleAction = styled('div')(() => ({}))

export const StyledHeaderMiddle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(30),
  paddingBottom: theme.spacing(11),
  display: 'flex',
  alignItems: 'center'
}))

export const StyledHeader = styled('header')(({ theme }) => ({}))
