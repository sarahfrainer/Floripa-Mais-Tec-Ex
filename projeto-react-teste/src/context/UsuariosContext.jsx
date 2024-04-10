import { createContext, useState } from "react";

export const UsuariosContext = createContext ()

export const UsuariosContextProvider = ({children}) => {
    const [usuarios, setUsuarios] = useState ([
        {
            titulo: "Trilha do macaco",
            cidadeEstado: "Florianópolis - SC",
            criador: "Sarah",
            duracao: "2 horas",
            trajeto: "6km",
            dificuldade: "intermediário",
            tipoDeTrilha: "Caminhada",
            link: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            titulo: "Trilha do Damião",
            cidadeEstado: "Bombinhas - SC",
            criador: "Sarah",
            duracao: "1 hora",
            trajeto: "3km",
            dificuldade: "iniciante",
            tipoDeTrilha: "Caminhada",
            link: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            titulo: "Trilha da Canoa",
            cidadeEstado: "Piçarras - SC",
            criador: "Sarah",
            duracao: "3,5 hora",
            trajeto: "8km",
            dificuldade: "avançado",
            tipoDeTrilha: "Caminhada",
            link: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ])

    return (
        <UsuariosContext.Provider value={{usuarios, setUsuarios}}>
            {children}
        </UsuariosContext.Provider>
    )
}