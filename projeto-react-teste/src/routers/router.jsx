import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import Cadastro from "../pages/Cadastro";
import Lista from "../pages/lista";
import App from "../App";

const Router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/cadastro",
        element: <Cadastro />
    },
    {
        path: "/lista-trilhas",
        element: <Lista />
    }]
}
])

export default Router