import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import Header from './componentes/header/Header'
import Main from './componentes/main/Main'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element:<>
              <Header/>
              <Main/>
            </>,
  },
  {
    path: "/inicio",
    element: <div>Página de Inicio!</div>,
  },
  {
    path: "/sobremim",
    element: <div>Página de Sobre mim!</div>,
  },
  {
    path: "/formacoes",
    element: <div>Página Formações!</div>,
  },
  {
    path: "/contato",
    element: <div>Página de Contato!</div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
