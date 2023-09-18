import type { Metadata } from 'next'
import { Suspense } from 'react'

export async function generateStaticParams() {
  return Array.from(Array(6).keys()).map((elt) => ({
    slug: `${elt}`
  }))
}

export function generateMetadata(props: any): Metadata {
  return {
    title: `Porfolio ${props.params.slug}`,
    other: {
      item: 'item',
      data: 'data'
    }
  }
}

const Homepage = (props: any) => {
  console.log('===ryan===> props : ', props)
  return <Suspense fallback={<>loading</>}>Homepage</Suspense>
}

export const dynamicParams = false

export default Homepage
