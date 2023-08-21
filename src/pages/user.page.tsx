import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useStore } from '@/zustand/zustandProvider'
import { shallow } from 'zustand/shallow'
import { Button } from '@/components/components/button'
import { Layout } from '@/components/layouts'
import { NextPageWithLayout } from './_app.page'

type UserPageProps = {
  // test?: string
  // test1?: number
}
const useUserStore = () => useStore((state) => state, shallow)

const UserPage: NextPageWithLayout<UserPageProps> = (props) => {
  const { user, login } = useUserStore()

  return (
    <>
      {user}
      <Button onClick={() => login?.('User', 'pass')}>Button</Button>
      <Link href="/">Homepage</Link>
      <Link href="/cv">CV</Link>
      <Link href="/user">User</Link>
    </>
  )
}

UserPage.getLayout = (page) => {
  return (
    <Layout>
      <Head>
        <title>User</title>
      </Head>
      {page}
    </Layout>
  )
}

export function getServerSideProps(
  ctx: GetServerSidePropsContext
): GetServerSidePropsResult<UserPageProps> {
  return {
    props: {
      test: 'testProps',
      test1: 1,
      initialZustandState: { user: 'Nhan Nguyen Initialize' }
    }
  }
}

export default UserPage
