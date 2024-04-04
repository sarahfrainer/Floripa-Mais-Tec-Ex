// import * as PropTypes from "prop-types"
import "./Card.css"

export default function Card (props) {
    return (
        <div className="container">
        <div className="texto">
        <h1 className="titulo"><b>{props.titulo} - {props.cidadeEstado}</b></h1>
        <p className="criador"><b>Por: {props.criador}</b></p>
        <p className="duracao">Duração: {props.duracao}</p>
        <p className="trajeto">Trajeto: {props.trajeto}</p>
        <div className="dificuldade">{props.dificuldade}</div>
        <div className="tipodeTrilha">{props.tipoDeTrilha}</div>
        </div>
        <div className="foto">
        <img className="imagem" src={props.link}/>
        </div>
        </div>
    )
}