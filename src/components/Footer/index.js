import styles from "./Footer.module.css"
function Footer(){
    return (
        // Conteúdo a ser exibido
        // JSX = html + xml (html com css dentro do JS)
        <footer className={styles.footer}>
            <div>
                <span> Aula Senac</span>
                <nav>
                    <a href="#"> Home</a>
                    <a href="#"> Senac</a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;