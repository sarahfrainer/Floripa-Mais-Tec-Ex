import { createBrowserRouter } from "react-router-dom";
import home from "../pages/home";
import cadastro from "../pages/cadastro";
import lista from "../pages/lista";

const routers = createBrowserRouter ([
    {
        path: "/",
        element: <home />
    },
    {
        path: "/cadastro",
        element: <cadastro />
    },
    {
        path: "/lista-trilhas",
        element: <lista />
    },
])

export default routers