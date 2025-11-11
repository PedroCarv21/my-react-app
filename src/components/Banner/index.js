import styles from "./Banner.module.css"
function Banner(){
    return (
        // Conteúdo a ser exibido
        // JSX = html + xml (html com css dentro do JS)
        <div className={styles.div}>
            <h2>Assista aqui os melhores filmes!</h2>
            <p>A plataforma para você assistir sempre o melhor.</p>
            <button>Saiba mais</button>
        </div>
    )
}

export default Banner;