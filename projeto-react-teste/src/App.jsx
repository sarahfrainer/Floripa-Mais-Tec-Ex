import Card from "./components/Card.js"
import "./App.css"


export default function App() {
  return (
    <div>
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