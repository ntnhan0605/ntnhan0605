import { Grid, useTheme } from '@mui/material'
import {
  ProfileBox,
  ProfileContainer,
  ProfileDivider,
  ProfileHeading,
  ProfileImage,
  ProfileName,
  ProfileSpacer
} from './index.styles'

export const Profile = () => {
  const theme = useTheme()
  return (
    <ProfileContainer maxWidth="lg">
      <ProfileBox boxShadow={2}>
        <ProfileName as="h1">NGUYEN THIEN NHAN</ProfileName>
        <ProfileDivider />
        <Grid spacing={2} container>
          <Grid xs={10} item>
            <ProfileHeading>Front-end Developer</ProfileHeading>
          </Grid>
          <Grid xs={2} item>
            <ProfileImage src="/images/avatar.jpg" />
          </Grid>
        </Grid>
        <ProfileSpacer />
        <ProfileHeading>OVERVIEW</ProfileHeading>
        <ProfileDivider />
        <p>
          Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci distinctio, unde odit possimus magni dolores veritatis
          officiis necessitatibus voluptate mollitia non, voluptatum excepturi
          quod. Cumque itaque dolorum esse enim impedit.
        </p>
      </ProfileBox>
    </ProfileContainer>
  )
}
