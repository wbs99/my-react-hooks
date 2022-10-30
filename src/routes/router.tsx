import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../views/HomePage';
import { NotFoundPage } from '../views/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/', element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },

]);