import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {Outlet} from "react-router-dom"
import { TrilhasContext, TrilhasContextProvider } from "./context/TrilhasContext"

export default function App () {
  return (
    <TrilhasContextProvider>
      <Navbar />

      <Outlet />

      <Footer />
    </TrilhasContextProvider>
  )
}