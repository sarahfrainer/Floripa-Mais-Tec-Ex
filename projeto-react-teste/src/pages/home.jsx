import * as React from 'react';
import styles from "./Home.module.css"

function Home() {
    return (
        <div className={styles.container}>
        <div className={styles.secao1}>
            <h1 className={styles.titulo1}>Que tal aproveitar um tempo com a natureza?</h1>
            <p className={styles.paragrafo1}>Junte-se a comunidade de entusiastas ao ar livre, compartilhe suas aventuras e inspire-se!</p>
            <button className={styles.botao1}> Explorar trilhas</button>
        </div>
        <div className={styles.secao2}>
            <h1 className={styles.titulo2}> Explore trilhas incríveis</h1>
            <p className={styles.paragrafo2}>Esse é um portal com o objetivo de reunir as melhores trilhas trekking e de ciclismo ao redor do mundo.</p>
            <button className={styles.botao2}> Explorar trilhas</button>
        </div>
        <div className={styles.secao3}>
            <h1 className={styles.titulo3}>Compartilhe fotos,
            <br /> dicas e localizações das
            <br /> suas trilhas favoritas</h1>
            <button className={styles.botao3}> Explorar trilhas</button>
            <img className={styles.imagem3} src="https://img.freepik.com/free-photo/beautiful-mountain-forest-landscape_23-2149063036.jpg?t=st=1713386070~exp=1713389670~hmac=f091aef0c797f1dc12a233bc4b10d6f33889eaa23fdc1f23f16a4e635ec6a443&w=360"></img>
        </div>
        </div>
    )
}


export default Home;