'use client'

import { NotFoundComponent } from '@/component-pages/NotFound'
import { LayoutComponent } from '@/components/Layout'

function ErrorPage() {
  return (
    <LayoutComponent>
      <NotFoundComponent title="Error" />
    </LayoutComponent>
  )
}

export default ErrorPage
