import Card from "./components/Card2.jsx"
import "./App.css"


export default function App() {
  return (
    <div className="pagina">
      <h1 className="titulo2">Explore trilhas incríveis</h1>
      <Card
        titulo="Titulo do Card"
        cidadeEstado="Cidade, Estado"
        criador="Nome do Criador"
        duracao="Duração"
        trajeto="Trajeto"
        dificuldade="Dificuldade"
        tipoDeTrilha="Tipo de Trilha"
        link="URL_da_Imagem"
      />
    </div>
  );
}