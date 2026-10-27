import { createBrowserRouter, Navigate } from 'react-router';
import { LocaleLayout } from './LocaleLayout';
import { HomePage } from '../pages/HomePage';
import { CvPage } from '../pages/CvPage';
import { CreatePage } from '../pages/CreatePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { detectLocale } from '../lib/paths';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Navigate to={`/${detectLocale(navigator.languages)}`} replace />,
    },
    // Static segment, so it wins over '/:lang'.
    { path: '/create', element: <CreatePage /> },
    {
      path: '/:lang',
      element: <LocaleLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'cv', element: <CvPage /> },
      ],
    },
    { path: '*', element: <NotFoundPage /> },
  ],
  { basename: import.meta.env.BASE_URL },
);
