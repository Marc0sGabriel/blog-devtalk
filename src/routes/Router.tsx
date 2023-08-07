import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Page404 } from './PageNotFound';
import { Default } from '../layouts/DefaultLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },

  {
    path: '*',
    element: <Page404 />,
  },
]);
