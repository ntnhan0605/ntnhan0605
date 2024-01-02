import { CV } from '@/component-pages/CV'
import { customGenerateMetadata } from '@/utils/metadata'

export const generateMetadata = customGenerateMetadata({
  title: 'CV - Nguyen Thien Nhan - Front-End Developer',
  description: 'This is a resume document',
  icons: '/favicon.svg'
})

function CVPage() {
  return <CV />
}

export default CVPage
