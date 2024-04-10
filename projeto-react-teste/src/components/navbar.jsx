import { Link } from "react-router-dom";

export default function navbar () {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/cadastro">Cadastro</Link>
            <Link to="/lista">Lista de Trilhas</Link>
        </nav>
    )
}