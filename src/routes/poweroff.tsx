import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/poweroff')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/poweroff"!</div>
}
