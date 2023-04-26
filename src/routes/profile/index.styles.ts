import { Box, Container, Divider, styled } from '@mui/material'

export const ProfileContainer = styled(Container)(() => {
  return {
    paddingLeft: 0,
    paddingRight: 0
  }
})

export const ProfileBox = styled(Box)(({ theme }) => {
  return { padding: theme.spacing(5) }
})

export const ProfileImage = styled('img')(({ theme }) => {
  return {
    maxWidth: '100%',
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius
  }
})

export const ProfileName = styled('h1')(({ theme }) => {
  console.log('===ryan===> theme : ', theme)
  return {
    ...theme.typography.h1
  }
})

export const ProfileHeading = styled('h2')(({ theme }) => {
  return {
    ...theme.typography.h2,
    fontSize: theme.spacing(3),
    fontWeight: 700
  }
})

export const ProfileSpacer = styled('div')``

export const ProfileDivider = styled(Divider)(({ theme }) => {
  return {
    borderColor: theme.palette.divider
  }
})
