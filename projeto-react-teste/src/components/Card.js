import React from 'react';
import useFetch from '../pages/React/Hooks/useFetch';
import "listaCards.json"

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
            {card && card.length > 0 && (
                <div>
                {card.map((sourceCard, index) => (
                    <div key={index}>
                        <h1>Lista de cards</h1>
                        <ul>
                            {sourceCard.map(item => (
                                <li key="{item.id}"></li>
                            ))}
                        </ul>
               
                </div>
                
                )
                            )};
                </div>
            )}



        </div>
    )
}