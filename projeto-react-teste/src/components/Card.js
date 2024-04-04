import React from 'react';
import useFetch from '../pages/React/Hooks/useFetch';
import Card from "./Card.jsx"

const myCard = () => {
    const { card, loading, error } = useFetch ("./public/listaCards.json");

    if (loading) {
        return <div>Carregando informações</div>;
    }

    if (error) {
        return <div>Erro na conexão</div>
    }

    return (
        <div>
                {card && Array.isArray(card) && card.map((item, index) => (
                <Card
                    key={index}
                    titulo={item.titulo}
                    cidadeEstado={item.cidadeEstado}
                    criador={item.criador}
                    duracao={item.duracao}
                    trajeto={item.trajeto}
                    dificuldade={item.dificuldade}
                    tipoDeTrilha={item.tipoDeTrilha}
                    link={item.link}
                />
    
                
                )
                            )};
                </div>
            )}



  

export default myCard;