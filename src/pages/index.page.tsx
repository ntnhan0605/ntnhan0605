import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useStore } from '@/zustand/zustandProvider'
import Typography from '@mui/material/Typography'
import { shallow } from 'zustand/shallow'
import { Button } from '@/components/atoms/button'
import { Layout } from '@/components/templates/layoutClient'
import { NextPageWithLayout } from './_app.page'

type HomepageProps = {
  // test?: string
  // test1?: number
}
const useUserStore = () => useStore((state) => state, shallow)

const HomePage: NextPageWithLayout<HomepageProps> = (props) => {
  const { user, login } = useUserStore()
  return (
    <>
      {user}
      <Button onClick={() => login?.('Nhan Nguyen', 'password')}>Button</Button>
      <Link href="/cv">CV</Link>
      <Link href="/user">User</Link>

      <Typography variant="handwritetitle1">bigTitle</Typography>
      <Typography variant="h2">Heading 2</Typography>
    </>
  )
}

HomePage.getLayout = (page) => {
  return (
    <Layout>
      <Head>
        <title>Homepage</title>
      </Head>
      {page}
    </Layout>
  )
}

export function getServerSideProps(
  ctx: GetServerSidePropsContext
): GetServerSidePropsResult<HomepageProps> {
  return { props: { test: 'testProps', test1: 1 } }
}

export default HomePage
