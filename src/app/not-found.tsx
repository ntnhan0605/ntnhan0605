import { NotFoundComponent } from '@/component-pages/NotFound/NotFoundComponent'
import { LayoutComponent } from '@/components/templates/LayoutComponent'

const NotFoundPage = () => {
  return (
    <LayoutComponent>
      <NotFoundComponent
        title="NOT FOUND"
        description="The page you are looking for doesn't exist. It may have been moved or
          removed altogether. Please try searching for some other page, or
          return to the website's homepage to find what you're looking for."
      />
    </LayoutComponent>
  )
}

export default NotFoundPage
