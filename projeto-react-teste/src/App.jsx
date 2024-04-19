import Navbar from "./components/navbar"
import Footer from "./components/footer"
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