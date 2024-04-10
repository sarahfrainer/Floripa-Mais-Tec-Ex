import Card from "../components/Card";
import "./lista.css"
import { UsuariosContext } from "../context/UsuariosContext";
import { useContext } from "react";
import React from "react";

function Lista () {

  const {usuarios} = useContext (UsuariosContext)

    return (
        <div className="pagina">
          <h1 className="titulo2">Explore trilhas incríveis</h1>
        {usuarios.map((usuario, index) => (
          <div className="container">
          <div className="texto">
          <h1 className="titulo" key={index}><b>{usuario.nome}</b></h1>
          <p className="criador" key={index}><b>Por: {usuario.criador}</b></p>
          <p className="duracao" key={index}>Duração: {usuario.duracao}</p>
          <p className="trajeto" key={index}>Trajeto: {usuario.trajeto}</p>
          <div className="dificuldade" key={index}>{usuario.dificuldade}</div>
          <div className="tipodeTrilha" key={index}>{usuario.tipoDeTrilha}</div>
          </div>
          <div className="foto">
          <img className="imagem" index={key} src={usuario.link}/>
          </div>
          </div>
           ))}
           </div>
         );
       };
  

export default Lista;