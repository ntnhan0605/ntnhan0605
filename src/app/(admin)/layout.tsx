import { LayoutAdmin } from '@/components/Layout/LayoutAdmin'
import 'public/css/antd.min.css'

export default function AdminLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return <LayoutAdmin>{children}</LayoutAdmin>
}
