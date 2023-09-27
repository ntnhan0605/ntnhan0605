import { ButtonComponent } from '@/components/Button'

export const metadata = {
  title: 'Admin'
}

const AdminPage = () => {
  return (
    <>
      AdminPage
      <ButtonComponent href="/" useLink>
        Click to Admin
      </ButtonComponent>
    </>
  )
}

export const dynamic = 'force-dynamic'

export default AdminPage
