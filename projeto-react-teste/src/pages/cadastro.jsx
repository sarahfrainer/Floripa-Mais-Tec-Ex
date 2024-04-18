import styles from "./Cadastro.module.css"

function Cadastro() {
    return (
        <form className={styles.formulario}>
            <h1 className={styles.titulo} id={styles.titulo}>Cadastro de nova trilha</h1>
            <label for="ntrilha" id={styles.ntrilha1}>Nome da trilha</label> <br />
            <input type="text" className={styles.ntrilha2} id={styles.ntrilha2} name="ntrilha" placeholder="digite o nome da trilha"></input><br />
            <label for="duracao" id={styles.duracao1}>Duração estimada (min)</label> <br />
            <input type="number" className={styles.duracao2} id={styles.duracao2} name="duracao" placeholder="digite a duração em minutos"></input><br />
            <label for="trajeto" id={styles.trajeto1}>Trajeto (km)</label> <br />
            <input type="number" className={styles.trajeto2} id={styles.trajeto2} name="trajeto" placeholder="digite a distância em km"></input><br />
            <label for="cidade" id={styles.cidade1}>Cidade</label> <br />
            <input type="text" className={styles.cidade2} id={styles.cidade2} name="cidade" placeholder="digite o nome da cidade"></input><br />
            <label for="estado" id={styles.estado1}>Estado</label> <br />
            <input type="text" className={styles.estado2} id={styles.estado2} name="estado" placeholder="digite o estado"></input><br />
            <label for="nusuario" id={styles.nusuario1}>Nome completo do usuário</label> <br />
            <input type="text" className={styles.nusuario2} id={styles.nusuario2} name="nusuario" placeholder="digite seu nome completo"></input><br />

            <label for="dificuldade" id={styles.dificuldade1}>Dificuldade</label> <br />
            <select name="dificuldade" id={styles.dificuldade2} className={styles.dificuldade2}>
                <option value="iniciante">Iniciante</option>
                <option value="intermediário">Intermediário</option>
                <option value="dificil">Difícil</option>
            </select><br />

            <label for="tipoDeTrilha" id={styles.tipoDeTrilha1}>Tripo de trilha</label> <br />
            <select name="tipoDeTrilha" id={styles.tipoDeTrilha2} className={styles.tipoDeTrilha2}>
                <option value="caminhada">Caminhada / trekking</option>
                <option value="ciclismo">Ciclismo</option>
            </select><br />

            <label for="imagemTrilha" id={styles.imagemTrilha1}>Url imagem da trilha</label> <br />
            <input type="text" className={styles.imagemTrilha2} id={styles.imagemTrilha2} name="imagemTrilha" placeholder="insira o link de uma imagem da trilha"></input><br />

            <div id={styles.cadastroContainer}>
            <input className={styles.cadastro}  id={styles.cadastro} type="submit" value="Cadastrar"></input>
            <button id={styles.voltar} className={styles.voltar}>Voltar</button>
            </div>
           
        </form>

    )
}

export default Cadastro