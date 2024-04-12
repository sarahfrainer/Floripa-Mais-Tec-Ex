import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar () {
    return (
        <nav className="navBar">
            <Link to="/" className="GuiaHome">Home</Link>
            <Link to="/cadastro" className="GuiaCadastro">Cadastro</Link>
            <Link to="/lista-trilhas" className="GuiaTrilhas">Lista de Trilhas</Link>
        </nav>
    )
}