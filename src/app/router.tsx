import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from '../features/home/pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
