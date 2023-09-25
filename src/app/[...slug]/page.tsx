import { notFound } from 'next/navigation'

type SlugPageProps = {
  params?: { slug: string[] }
  searchParams?: URLSearchParams
}
const SlugPage = ({ params, searchParams }: SlugPageProps) => {
  if (!params?.slug?.includes('index')) {
    notFound()
  }
  console.log('===ryan===> searchParams : ', searchParams)

  return <>Slug Page</>
}

export default SlugPage
