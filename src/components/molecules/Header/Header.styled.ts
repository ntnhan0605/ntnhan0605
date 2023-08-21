import { styled } from '@mui/material/styles'
import Link from 'next/link'

export const StyledHeaderLink = styled(Link)(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.action.hover
    }
  }
})

export const StyledHeaderTop = styled('div')(({ theme }) => {
  return {
    height: 35,
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.typography.body2.fontSize,
    [`${theme.breakpoints.down('sm')}`]: {
      display: 'none'
    }
  }
})

export const StyledHeader = styled('header')(() => {
  return {}
})
