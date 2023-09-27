import { CV } from '@/component-pages/CV'
import { MainComponent } from '@/components/Main'
import { customGenerateMetadata } from '@/utils/metadata'

export const generateMetadata = customGenerateMetadata({
  title: 'CV - Nguyen Thien Nhan - Front-End Developer',
  description: 'This is a resume document'
})

function CVPage() {
  return (
    <MainComponent className="cv-body">
      <CV />
    </MainComponent>
  )
}

export default CVPage
