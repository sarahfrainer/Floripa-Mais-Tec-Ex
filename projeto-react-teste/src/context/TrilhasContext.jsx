import { createContext, useState } from "react";

export const TrilhasContext = createContext()

export const TrilhasContextProvider = ({children}) => {
    const [trilhas, setTrilhas] = useState ([
        {
            ntrilha: "Trilha do macaco",
            cidadeEstado: "Florianópolis - SC",
            nusuario: "Sarah",
            duracao: "2 horas",
            trajeto: "6km",
            dificuldade: "intermediário",
            tipoDeTrilha: "Caminhada",
            imagemTrilha: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            ntrilha: "Trilha do Damião",
            cidadeEstado: "Bombinhas - SC",
            nusuario: "Sarah",
            duracao: "1 hora",
            trajeto: "3km",
            dificuldade: "iniciante",
            tipoDeTrilha: "Caminhada",
            imagemTrilha: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            ntrilha: "Trilha da Canoa",
            cidadeEstado: "Piçarras - SC",
            nusuario: "Sarah",
            duracao: "3,5 hora",
            trajeto: "8km",
            dificuldade: "avançado",
            tipoDeTrilha: "Caminhada",
            imagemTrilha: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ])

    function adicionarTrilha(trilha) {
        setTrilhas((prevTrilhas) => [...prevTrilhas, {...trilha, id: prevTrilhas.length + 1}]);
    }

    return (
        <TrilhasContext.Provider value={{adicionarTrilha, trilhas, setTrilhas}}>
            {children}
        </TrilhasContext.Provider>
    )
} 