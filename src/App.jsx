import './App.css'
import './index.css'
import {createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './components/sections/navbar'
import Footer from './components/sections/footer'
import Inicio from './components/pages/inicio'
import Actividades from './components/pages/actividades'
import Contacto from './components/pages/contacto'
import Historia from './components/pages/historia'
import Metodologia from './components/pages/metodologias'
import Aviso from './components/pages/aviso'

// function App() {
//   return (
//     <BrowserRouter>
//     <Navbar></Navbar>
//     <Routes>
//       <Route path={'/'} element={<Inicio></Inicio>}></Route>
//       <Route path={'/historia'} element={<Historia></Historia>}></Route>
//       <Route path={'/metodologias'} element={<Metodologia></Metodologia>}></Route>
//       <Route path={'/actividades'} element={<Actividades></Actividades>}></Route>
//       <Route path={'/contacto'} element={<Contacto></Contacto>}></Route>
//       <Route path={'/aviso-de-privacidad'} element={<Aviso></Aviso>}></Route>
//     </Routes>
//     <Footer></Footer>
//     </BrowserRouter>
//   )
// }

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
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
