import { Metadata } from 'next'
import { GenerateParams } from 'next/dist/build/utils'
import { PropsWithChildren } from 'react'

export const generateMetadata = async (params: GenerateParams) => {
  return { viewport: '1', title: 'slug 11' } satisfies Metadata
}

export default function SlugLayout(props: PropsWithChildren) {
  const { children } = props
  return children
}
