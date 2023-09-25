import { CV } from '@/component-pages/CV'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CV - Nguyen Thien Nhan - Front-End Developer',
  description: 'This is a resume document'
}

export const dynamic = 'force-dynamic'

const CVPage = () => {
  return <CV />
}

export default CVPage
