import { Metadata } from 'next'
import { GenerateParams } from 'next/dist/build/utils'

export const generateMetadata = async (params: GenerateParams) => {
  console.log('===ryan===> params : ', params)
  return { viewport: '1', title: 'slug 11' } satisfies Metadata
}

export default function SlugLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return children
}
