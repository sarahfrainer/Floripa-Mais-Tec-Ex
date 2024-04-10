import { createBrowserRouter } from "react-router-dom";
import home from "../pages/home";
import cadastro from "../pages/cadastro";
import lista from "../pages/lista";
import App from "../App";

const routers = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
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
    }]
}
])

export default routers