import React, { useState, useEffect } from 'react';
import { UsuariosContext } from '../../../context/UsuariosContext';
// import "./public/listaCards.json"

const useFetch = (url) => {
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCard = async() => {
            try {
                const response = await fetch("../../../context/UsuariosContext");
                if (!response.ok) {
                    throw new Error ("Problema na conexão");
                }
                const json = await response.json();
                setCard(json);
            }
            catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchCard();


    }, [url]);


    return {card, loading, error};};

   

    export default useFetch;














//         fetch("listaCards.json")
//            .then(response => {
//                 if (response.ok) {
//                     return response.json()
//                 }
//                 throw response;
//             })
//             .then card => {
//                 setCard(card);
//             }
//             .catch (error => {
//                 console.log ("erro", error)
//                 setError (error);
//             }
//             .finally (() => {
//                 setLoading (false);
//             }
//             )
//                 )
//     }


//     )
// }

