import { Link } from 'react-router-dom'

import { Card } from '~/components/Card'
import NavLayout from '~/layouts/NavLayout'

export default function Home() {
  return (
    <NavLayout title="Popular titles">
      <ul className="flex gap-4">
        <li>
          <Link to="/series">
            <Card title="Popular series">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl text-white">SERIES</span>
              </div>
            </Card>
          </Link>
        </li>
        <li>
          <Link to="/movies">
            <Card title="Popular movies">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl text-white">MOVIES</span>
              </div>
            </Card>
          </Link>
        </li>
      </ul>
    </NavLayout>
  )
}
