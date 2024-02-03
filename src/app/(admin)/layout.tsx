import { LayoutAdmin } from '@/components/Layout/LayoutAdmin'

export default function AdminLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return <LayoutAdmin>{children}</LayoutAdmin>
}
