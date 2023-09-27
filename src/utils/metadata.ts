import { Metadata as MetadataCore } from 'next'

const defaultTitle = 'Nhân Nguyễn - Tổng hợp thông tin vui vẻ'
const defaultDescription = 'Nhân Nguyễn - Tổng hợp thông tin vui vẻ'
const defaultImage = '123213'

export type Metadata = MetadataCore & { image?: string }
export type GenerateMetadataProps = {
  params: Record<string, any>
  searchParams: Record<string, any>
}
export type GenerateMetadata = (
  props: GenerateMetadataProps
) => Promise<Metadata> | Metadata

export const customGenerateMetadata = (
  generateMetadata: Metadata | GenerateMetadata
): GenerateMetadata => {
  return async (props: GenerateMetadataProps) => {
    const metadata =
      typeof generateMetadata === 'function'
        ? await generateMetadata(props)
        : generateMetadata
    metadata.metadataBase = process.env.REACT_APP_HOME
      ? new URL(process.env.REACT_APP_HOME)
      : null
    metadata.title = metadata.title || defaultTitle
    metadata.description = metadata.description || defaultDescription
    metadata.image = metadata.image || defaultImage
    metadata.openGraph = {
      type: 'website',
      title: metadata.title,
      description: metadata.description,
      images: [{ url: metadata.image, alt: metadata.title.toString() }]
    }
    metadata.icons = '/favicon.svg'
    return metadata
  }
}
