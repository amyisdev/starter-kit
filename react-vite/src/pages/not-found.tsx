import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="flex items-center h-screen bg-muted">
      <div className="mx-auto">
        <h1 className="text-5xl font-bold">
          404 <br />
          <span className="text-4xl font-normal">Page Not Found</span>
        </h1>
        <Button asChild className="mt-8">
          <Link to="/">Go to Home</Link>
        </Button>
      </div>
    </div>
  )
}
