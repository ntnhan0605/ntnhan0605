import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import {
  StyledHeader,
  StyledHeaderLink,
  StyledHeaderTop
} from './Header.styled'

export const Header: FC = () => {
  return (
    <StyledHeader>
      <Container fixed>
        <StyledHeaderTop>
          <Grid container columnSpacing={12}>
            <Grid item xs={6}>
              <Typography variant="body2">
                Free shipping for orders over $59!
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Stack justifyContent="flex-end" direction="row" spacing={24}>
                <StyledHeaderLink href="/faq">FAQ</StyledHeaderLink>
                <StyledHeaderLink href="/contact">Contact</StyledHeaderLink>
              </Stack>
            </Grid>
          </Grid>
        </StyledHeaderTop>
      </Container>
    </StyledHeader>
  )
}
