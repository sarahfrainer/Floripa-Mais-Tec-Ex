import { Card, CardActions, CardContent, CardHeader } from "@mui/material";
import { TrilhasContext } from "../context/TrilhasContext";
import { useContext } from "react";
import "./lista.css"

function Lista() {

  const { trilhas } = useContext(TrilhasContext)

  return (
    <div className="geral">
      <div className="tituloPagina">
        <h1>Explore trilhas incríveis!</h1>
      </div>
      {trilhas.map((trilha, index) => {
        return (
          <Card key={index}>
            <CardContent>
              <div className="container">
                <div className="texto">
                  <h1 className="titulo">{trilha.titulo}</h1>
                  <h3 className="cidadeEstado">{trilha.cidadeEstado}</h3>
                  <p className="criador">Por: {trilha.criador}</p>
                  <p className="duracao">Duração: {trilha.duracao}</p>
                  <p className="trajeto">Trajeto: {trilha.trajeto}</p>
                  <div className="dificuldade">{trilha.dificuldade}</div>
                  <div className="tipoDeTrilha">{trilha.tipoDeTrilha}</div>
                </div>
                <div className="foto">
                  <img className="imagem" src={trilha.link} />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  );
}

export default Lista;