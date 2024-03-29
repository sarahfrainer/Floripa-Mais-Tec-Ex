export default function Card (props) {
    return (
        <>
        <h1><b>{props.titulo} - {props.cidadeEstado}</b></h1>
        <p><b>Por: {props.criador}</b></p>
        <p>{props.duracao}</p>
        <p>{props.trajeto}</p>
        <div>{props.dificuldade}</div>
        <div>{props.tipoDeTrilha}</div>
        <img width="200px" src={props.link}></img>
        </>
    )
}