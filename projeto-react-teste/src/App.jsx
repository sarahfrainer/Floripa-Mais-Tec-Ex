import navbar from "./components/navbar"
import footer from "./components/footer"
import {Outlet} from "react-router-dom"

export default function App () {
  return (
    <div className="site">
      <navbar />

      <Outlet />

      <footer />
    </div>
  )
}
// export default function App() {
//   return (
//     <div className="pagina">
//       <h1 className="titulo2">Explore trilhas incríveis</h1>
//       <Card
//         titulo="Titulo do Card"
//         cidadeEstado="Cidade, Estado"
//         criador="Nome do Criador"
//         duracao="Duração"
//         trajeto="Trajeto"
//         dificuldade="Dificuldade"
//         tipoDeTrilha="Tipo de Trilha"
//         link="URL_da_Imagem"
//       />
//     </div>
//   );
// }