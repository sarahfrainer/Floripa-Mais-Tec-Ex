import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Cadastro from "../pages/Cadastro.jsx";
import Lista from "../pages/Lista.jsx";
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