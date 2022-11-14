import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../views/HomePage';
import { NotFoundPage } from '../views/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/', element: <HomePage title='首页' />,
  },
  {
    path: "/home",
    element: <HomePage title='首页' />,
    errorElement: <NotFoundPage />,
  },
]);