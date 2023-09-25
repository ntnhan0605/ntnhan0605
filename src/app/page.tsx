import { ButtonComponent } from '@/components/atoms/ButtonComponent'
import { LayoutComponent } from '@/components/templates/LayoutComponent'
import Link from 'next/link'

const IndexPage = () => {
  return (
    <LayoutComponent>
      <Link href="/cv">Go to CV Page</Link>
      <Link href="/admin">Go to CV Admin</Link>
      <ButtonComponent>Click to Admin</ButtonComponent>
    </LayoutComponent>
  )
}

export default IndexPage
