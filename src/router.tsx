import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Series from './pages/Series'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/series',
    element: <Series />,
  },
])
