import { Button } from '@/components/Button'

export const metadata = {
  title: 'Admin'
}

const AdminPage = () => {
  return (
    <>
      AdminPage
      <Button href="/" useLink>
        Click to Admin
      </Button>
    </>
  )
}

export const dynamic = 'force-dynamic'

export default AdminPage
