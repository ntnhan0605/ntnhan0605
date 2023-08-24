import { FormSearch } from '@/components/atoms/Form/FormSearch'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { FC } from 'react'
import {
  StyledHeader,
  StyledHeaderLink,
  StyledHeaderMiddle,
  StyledHeaderMiddleAction,
  StyledHeaderMiddleLogo,
  StyledHeaderMiddleSearch,
  StyledHeaderTop
} from './Header.styled'
import { Logo } from '@/components/atoms/Logo'

export const Header: FC = () => {
  return (
    <StyledHeader>
      <Container fixed>
        <StyledHeaderTop>
          <Grid container columnSpacing={12}>
            <Grid item xs={6}>
              Miễn phí ship cho đơn hàng trên 500.000đ
            </Grid>
            <Grid item xs={6}>
              <Stack justifyContent="flex-end" direction="row" spacing={24}>
                <StyledHeaderLink href="/faq">FAQ</StyledHeaderLink>
                <StyledHeaderLink href="/contact">Liên hệ</StyledHeaderLink>
              </Stack>
            </Grid>
          </Grid>
        </StyledHeaderTop>
      </Container>
      <Container fixed>
        <StyledHeaderMiddle>
          <StyledHeaderMiddleSearch>
            <FormSearch />
          </StyledHeaderMiddleSearch>
          <StyledHeaderMiddleLogo>
            <Logo />
          </StyledHeaderMiddleLogo>
          <StyledHeaderMiddleAction></StyledHeaderMiddleAction>
        </StyledHeaderMiddle>
      </Container>
    </StyledHeader>
  )
}
