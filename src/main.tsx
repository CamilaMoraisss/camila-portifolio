import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import Header from './componentes/header/Header'
import Main from './componentes/main/Main'
import Contato from './componentes/contato/Contato'
import Footer from './componentes/footer/Footer'

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
              <Footer/>
            </>,
  },

  {
    path: "/sobremim",
    element:<>
              <Header/>
              <Main/>
              <Footer/>
            </>,
  },

  {
    path: "/formacoes",
    element:<>
              <Header/>
              <Main/>
              <Footer/>
            </>,
  },
 
  {
    path: "/contato",
    element:<>
              <Header/>
              <Contato/>
              <Footer/>
            </>,
  },
 
 
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
