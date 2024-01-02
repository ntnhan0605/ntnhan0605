import { ContactUsContainer } from '@/component-pages/ContactUs/ContactUsContainer'
import { customGenerateMetadata } from '@/utils/metadata'

export const generateMetadata = customGenerateMetadata({
  title: 'Liên hệ',
  description: 'Liên hệ'
})

const ContactPage = () => {
  return <ContactUsContainer />
}

export default ContactPage
