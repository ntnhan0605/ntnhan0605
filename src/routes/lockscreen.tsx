import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lockscreen')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="w-screen h-screen">Hello "/login"!</div>
}
