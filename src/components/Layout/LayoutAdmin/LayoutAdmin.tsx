'use client'
import Layout from 'antd/lib/layout'
import { ReactNode } from 'react'

export type LayoutAdminProps = {
  children?: ReactNode
}
export const LayoutAdmin = (props: LayoutAdminProps) => {
  const { children } = props

  return (
    <Layout>
      <style>{`.header, .footer {display: none;}`}</style>
      <Layout.Sider></Layout.Sider>
      <Layout>
        <Layout.Content>{children}</Layout.Content>
      </Layout>
    </Layout>
  )
}
