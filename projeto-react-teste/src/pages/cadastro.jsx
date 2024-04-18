import styles from "./Cadastro.module.css"
import * as React from "react";
import { useForm } from "react-hook-form";


function Cadastro() {
    const { register, handleSubmit } = useForm();

    return (
        <form className={styles.formulario} onSubmit={handleSubmit((data) => {
            console.log(data)
        })}>

            <h1 className={styles.titulo} id={styles.titulo}>Cadastro de nova trilha</h1>

            <label htmlFor="ntrilha" id={styles.ntrilha1}>Nome da trilha</label> <br />
            <input type="text" className={styles.ntrilha2} id={styles.ntrilha2} 
            {...register("ntrilha", { required: true, maxLength: 100 })} placeholder="digite o nome da trilha"></input><br />

            <label htmlFor="duracao" id={styles.duracao1}>Duração estimada (min)</label> <br />
            <input type="number" className={styles.duracao2} id={styles.duracao2} 
            {...register("duracao", { required: true, maxLength: 4 })} placeholder="digite a duração em minutos"></input><br />

            <label htmlFor="trajeto" id={styles.trajeto1}>Trajeto (km)</label> <br />
            <input type="number" className={styles.trajeto2} id={styles.trajeto2}
            {...register("trajeto", { required: true, maxLength: 5 })} placeholder="digite a distância em km"></input><br />

            <label htmlFor="cidade" id={styles.cidade1}>Cidade</label> <br />
            <input type="text" className={styles.cidade2} id={styles.cidade2} 
            {...register("cidade", { required: true, maxLength: 60 })} placeholder="digite o nome da cidade"></input><br />

            <label htmlFor="estado" id={styles.estado1}>Estado</label> <br />
            <input type="text" className={styles.estado2} id={styles.estado2}
            {...register("estado", { required: true, maxLength: 2 })} placeholder="digite o estado"></input><br />

            <label htmlFor="nusuario" id={styles.nusuario1}>Nome completo do usuário</label> <br />
            <input type="text" className={styles.nusuario2} id={styles.nusuario2} 
            {...register("nusuario", { required: true, maxLength: 60 })} placeholder="digite seu nome completo"></input><br />

            <label htmlFor="dificuldade" id={styles.dificuldade1}>Dificuldade</label> <br />
            <select {...register("dificuldade", { required: true })} id={styles.dificuldade2} className={styles.dificuldade2}>
                <option value="iniciante">Iniciante</option>
                <option value="intermediário">Intermediário</option>
                <option value="dificil">Difícil</option>
            </select><br />

            <label htmlFor="tipoDeTrilha" id={styles.tipoDeTrilha1}>Tripo de trilha</label> <br />
            <select {...register("tipoDeTrilha", { required: true })} id={styles.tipoDeTrilha2} className={styles.tipoDeTrilha2}>
                <option value="caminhada">Caminhada / trekking</option>
                <option value="ciclismo">Ciclismo</option>
            </select><br />

            <label htmlFor="imagemTrilha" id={styles.imagemTrilha1}>Url imagem da trilha</label> <br />
            <input type="text" className={styles.imagemTrilha2} id={styles.imagemTrilha2}
            {...register("imagemTrilha", { required: true, maxLength: 300 })} placeholder="insira o link de uma imagem da trilha"></input><br />

            <div id={styles.cadastroContainer}>
                <input className={styles.cadastro} id={styles.cadastro} type="submit" value="Cadastrar"></input>
                <button id={styles.voltar} className={styles.voltar}>Voltar</button>
            </div>

        </form>

    )
}

export default Cadastro