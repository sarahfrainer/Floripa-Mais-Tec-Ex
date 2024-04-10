import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Router from "./routers/Router.jsx"
import { UsuariosContextProvider } from './context/UsuariosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router}>
    <UsuariosContextProvider>
    <App />
    </UsuariosContextProvider>
  </RouterProvider>,
)
