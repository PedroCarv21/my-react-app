import styles from "./Footer.module.css"
function Footer(){
    return (
        // Conteúdo a ser exibido
        // JSX = html + xml (html com css dentro do JS)
        <footer className={styles.footer}>
                <nav>
                    <a href="#"> Contato</a> |
                    <a href="#"> Saiba Mais</a>
                </nav>
        </footer>
    )
}

export default Footer;