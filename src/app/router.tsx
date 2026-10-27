import { createBrowserRouter, Navigate, useParams } from 'react-router';
import { LocaleLayout } from './LocaleLayout';
import { HomePage } from '../pages/HomePage';
import { CvPage } from '../pages/CvPage';
import { CreatePage } from '../pages/CreatePage';
import { ProjectPage } from '../pages/ProjectPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { detectLocale } from '../lib/paths';

function ProjectRedirect() {
  const { id } = useParams();
  return <Navigate to={`/${detectLocale(navigator.languages)}/project/${id}`} replace />;
}

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Navigate to={`/${detectLocale(navigator.languages)}`} replace />,
    },
    // Static segment, so it wins over '/:lang'.
    { path: '/create', element: <CreatePage /> },
    {
      // Language-less links redirect to the visitor's language.
      path: '/project/:id',
      element: <ProjectRedirect />,
    },
    {
      path: '/:lang',
      element: <LocaleLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'cv', element: <CvPage /> },
        { path: 'project/:id', element: <ProjectPage /> },
      ],
    },
    { path: '*', element: <NotFoundPage /> },
  ],
  { basename: import.meta.env.BASE_URL },
);
