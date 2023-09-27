import { LayoutComponent } from '@/components/Layout'
import { PropsWithChildren } from 'react'

export default function PageLayout(props: PropsWithChildren) {
  const { children } = props
  return <LayoutComponent>{children}</LayoutComponent>
}
