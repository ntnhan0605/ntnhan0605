import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

export const StyledButton = styled(IconButton)(({ theme }) => ({
  padding: 0,
  marginRight: theme.spacing(4),
  fontSize: theme.spacing(18),
  '&:hover': {
    backgroundColor: 'transparent'
  }
})) as typeof IconButton

export const StyledInput = styled('input')(({ theme }) => ({
  width: '100%',
  outline: 'none !important',
  border: 'none',
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  fontSize: theme.spacing(11),
  letterSpacing: '0.25em',
  textAlign: 'right'
}))

export const StyledForm = styled('form')(() => ({
  display: 'flex',
  alignItems: 'flex-end'
}))
