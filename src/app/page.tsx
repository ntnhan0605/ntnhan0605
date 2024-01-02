import { Button } from '@/components/Button'
import { customGenerateMetadata } from '@/utils/metadata'
import Link from 'next/link'

export const generateMetadata = customGenerateMetadata({})

function HomePage() {
  return (
    <>
      <Link href="/cv">Go to CV Page</Link>
      <Link href="/admin">Go to CV Admin</Link>
      <Button>Click to Admin</Button>
    </>
  )
}

export default HomePage
