import './index.css'
import {createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Navbar, Footer, Inicio, Actividades, Contacto, Historia, Metodologia, Aviso, NotFound } from './imports'

const HeaderLayout = () => (
  <>
    <Navbar />
      <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
      {
        path: "historia",
        element: <Historia />,
      },
      {
        path: "metodologias",
        element: <Metodologia />,
      },
      {
        path: "actividades",
        element: <Actividades />,
      },
      {
        path: "contacto",
        element: <Contacto />,
      },
      {
        path: "aviso-de-privacidad",
        element: <Aviso />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
