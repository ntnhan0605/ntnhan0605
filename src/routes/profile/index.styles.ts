import { Avatar, Box, Container, Divider, styled } from '@mui/material'

export const ProfileContainer = styled(Container)(({ theme }) => {
  return {
    [theme.breakpoints.up('xs')]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  }
})

export const ProfileBox = styled(Box)(({ theme }) => {
  return { padding: theme.spacing(7.5) }
})

export const ProfileBoxItem = styled(Box)(({ theme }) => {
  return { paddingTop: theme.spacing(2), paddingBottom: theme.spacing(2) }
})

export const ProfileBoxInnerItem = styled(Box)(({ theme }) => {
  return { paddingTop: theme.spacing(1), paddingBottom: theme.spacing(1) }
})

export const ProfileAvatar = styled(Avatar)(({ theme }) => {
  return {
    position: 'relative',
    width: '100%',
    paddingTop: '100%',
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    '.MuiAvatar-img': {
      position: 'absolute',
      inset: 0,
      objectFit: 'cover',
      objectPosition: 'top center'
    }
  }
})

export const ProfileName = styled('h1')(({ theme }) => {
  return {
    ...theme.typography.h1,
    color: theme.palette.primary.main
  }
})

export const ProfileHeading = styled('h2')(({ theme }) => {
  return {
    ...theme.typography.h4,
    color: theme.palette.primary.main
  }
})

export const ProfilePosition = styled('h3')(({ theme }) => {
  return {
    ...theme.typography.h5,
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
    fontWeight: 700
  }
})

export const ProfileDivider = styled(Divider)(({ theme }) => {
  return {
    marginBottom: theme.spacing(2),
    '&.half': {
      marginTop: theme.spacing(2),
      marginBottom: 0
    }
  }
})

export const ProfileTable = styled('table')(({ theme }) => {
  return {
    td: {
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5)
    },
    th: {
      paddingTop: theme.spacing(0.5),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(0.5),
      fontWeight: 500,
      textAlign: 'left',
      whiteSpace: 'nowrap'
    }
  }
})

export const ProfileStrong = styled('strong')(() => {
  return {
    fontWeight: 500
  }
})

export const ProfileDescription = styled('p')(({ theme }) => {
  return {
    ...theme.typography.body1
  }
})

export const ProfileList = styled('ul')(({ theme }) => {
  return {
    paddingLeft: theme.spacing(2),
    li: {
      ['&:before']: {
        content: '"-"',
        paddingRight: theme.spacing(1)
      }
    }
  }
})

export const ProfileProjectTable = styled(ProfileTable)(({ theme }) => {
  return {
    width: '100%',
    th: {
      width: '25%',
      borderLeft: `1px solid ${theme.palette.primary.main}`,
      borderTop: `1px solid ${theme.palette.primary.main}`,
      padding: theme.spacing(1),
      paddingRight: theme.spacing(2),
      whiteSpace: 'normal',
      '&:last-child': {
        borderRight: `1px solid ${theme.palette.primary.main}`
      }
    },
    td: {
      borderLeft: `1px solid ${theme.palette.primary.main}`,
      borderTop: `1px solid ${theme.palette.primary.main}`,
      padding: theme.spacing(1),
      '&:last-child': {
        borderRight: `1px solid ${theme.palette.primary.main}`
      }
    },
    tr: {
      '&:last-child': {
        th: {
          borderBottom: `1px solid ${theme.palette.primary.main}`
        },
        td: {
          borderBottom: `1px solid ${theme.palette.primary.main}`
        }
      }
    },
    '&.half': {
      th: {
        width: '50%'
      }
    }
  }
})
