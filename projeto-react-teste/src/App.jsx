import Card from "./components/Card"

export default function App() {
  return (
      <>
      <h1>Explore trilhas incríveis</h1>
      <Card titulo="Trilha do macaco" cidadeEstado="Florianópolis - SC" criador="Sarah" duracao="2 horas" trajeto="6km" dificuldade="intermediário" tipoDeTrilha="Caminhada" link="https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Card titulo="Trilha do Damião" cidadeEstado="Bombinhas - SC" criador="Sarah" duracao="1 hora" trajeto="3km" dificuldade="iniciante" tipoDeTrilha="Caminhada" link="https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Card titulo="Trilha do Canoa" cidadeEstado="Piçarras - SC" criador="Sarah" duracao="3,5 horas" trajeto="8km" dificuldade="avançado" tipoDeTrilha="Caminhada" link="https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      </>
  )
}
