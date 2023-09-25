import { ButtonComponent } from '@/components/atoms/ButtonComponent'

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

export default AdminPage
