import styles from "./Cadastro.module.css"
import * as React from "react";
import { useForm } from "react-hook-form";
import { TrilhasContext } from "../context/TrilhasContext";
import { useContext } from "react";


function Cadastro() {
    const { register,
        handleSubmit, 
        formState: { errors }
        } = useForm();

        const { adicionarTrilha } = useContext (TrilhasContext);

        function onSubmit(formValue) {
            console.log ("Valores do formulario", formValue);
            adicionarTrilha(formValue);
            reset();
        }

        console.log (errors);

    return (
        <form className={styles.formulario} onSubmit={handleSubmit((onSubmit) )}>

            <h1 className={styles.titulo} id={styles.titulo}>Cadastro de nova trilha</h1>

            <div>
            <label htmlFor="ntrilha" id={styles.ntrilha1}>Nome da trilha</label> <br />
            <input type="text" className={styles.ntrilha2} id={styles.ntrilha2} 
            {...register("ntrilha", { 
            required: "Por favor, insira o nome da trilha",
                maxLength: {
                value: 100,
                message: "Máximo de 100 caracteres permitido" }})} placeholder="digite o nome da trilha"></input><br />

               {errors.ntrilha && <p>{errors.ntrilha.message}</p>}
            </div>
            
            <div>
            <label htmlFor="duracao" id={styles.duracao1}>Duração estimada (min)</label> <br />
            <input type="number" className={styles.duracao2} id={styles.duracao2} 
            {...register("duracao", { 
                required: "por favor, insira a duração", maxLength: {
                value: 4,
                message: "no máximo de 4 caracteres" }})} placeholder="digite a duração em minutos"></input><br />

                {errors.duracao && <p>{errors.duracao.message}</p>}
            </div>

            <div>
            <label htmlFor="trajeto" id={styles.trajeto1}>Trajeto (km)</label> <br />
            <input type="number" className={styles.trajeto2} id={styles.trajeto2}
            {...register("trajeto", { 
                required: "por favor, insira o tamanho do trajeto", maxLength: {
                value: 5,
                message: "no máximo 5 caracteres" }})} placeholder="digite a distância em km"></input><br />

                {errors.trajeto && <p>{errors.trajeto.message}</p>}
            </div>

            <div>
            <label htmlFor="cidade" id={styles.cidade1}>Cidade</label> <br />
            <input type="text" className={styles.cidade2} id={styles.cidade2} 
            {...register("cidade", { 
                required: "por favor, insira a cidade", maxLength: {
                value: 60,
                message: "no máximo 60 caracteres" }})} placeholder="digite o nome da cidade"></input><br />

                {errors.cidade && <p>{errors.cidade.message}</p>}
            </div>

            <div>
            <label htmlFor="estado" id={styles.estado1}>Estado</label> <br />
            <input type="text" className={styles.estado2} id={styles.estado2}
            {...register("estado", { 
                required: "por favor, insira o estado", maxLength: {
                value: 2,
                message: "no máximo 2 caracteres" }})} placeholder="digite o estado"></input><br />

                {errors.estado && <p>{errors.estado.message}</p>}
            </div>

            <div>
            <label htmlFor="nusuario" id={styles.nusuario1}>Nome completo do usuário</label> <br />
            <input type="text" className={styles.nusuario2} id={styles.nusuario2} 
            {...register("nusuario", { 
                required: "por favor, insira o seu nome", maxLength: {
                value: 60,
                message: "no máximo 60 caracteres" }})} placeholder="digite seu nome completo"></input><br />

                {errors.nusuario && <p>{errors.nusuario.message}</p>}
            </div>

            <div>
            <label htmlFor="dificuldade" id={styles.dificuldade1}>Dificuldade</label> <br />
            <select {...register("dificuldade", { 
                required: "por favor, selecione uma dificuldade" })} id={styles.dificuldade2} className={styles.dificuldade2}>
                <option value="iniciante">Iniciante</option>
                <option value="intermediário">Intermediário</option>
                <option value="dificil">Difícil</option>
            </select><br />

            {errors.dificuldade && <p>{errors.dificuldade.message}</p>}
            </div>

            <div>
            <label htmlFor="tipoDeTrilha" id={styles.tipoDeTrilha1}>Tripo de trilha</label> <br />
            <select {...register("tipoDeTrilha", { 
                required: "por favor, selecione o tipo de trilha" })} id={styles.tipoDeTrilha2} className={styles.tipoDeTrilha2}>
                <option value="caminhada">Caminhada / trekking</option>
                <option value="ciclismo">Ciclismo</option>

                {errors.tipoDeTrilha && <p>{errors.tipoDeTrilha.message}</p>}
            </select><br />
            </div>

            <div>
            <label htmlFor="imagemTrilha" id={styles.imagemTrilha1}>Url imagem da trilha</label> <br />
            <input type="text" className={styles.imagemTrilha2} id={styles.imagemTrilha2}
            {...register("imagemTrilha", { 
                required: "por favor, insira o link da imagem", maxLength: {
                value: 300,
                message: "no máximo 300 caracteres" }})} placeholder="insira o link de uma imagem da trilha"></input><br />

                {errors.imagemTrilha && <p>{errors.imagemTrilha.message}</p>}
            </div>

            <div id={styles.cadastroContainer}>
                <input className={styles.cadastro} id={styles.cadastro} type="submit" value="Cadastrar"></input>
                <button id={styles.voltar} className={styles.voltar}>Voltar</button>
            </div>

        </form>

    )
}

export default Cadastro