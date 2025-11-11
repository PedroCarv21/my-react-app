import styles from "./Header.module.css"
function Header(){
    return (
        // Conteúdo a ser exibido
        // JSX = html + xml (html com css dentro do JS)
        <header className={styles.header}>
            <h1>SenacFlix</h1>
            <nav>
                <a href="#"> Início</a>
                <a href="#"> Filmes</a>
                <a href="#"> Sobre</a>
                <a href="#"> Contato</a>
            </nav>
        </header>
    )
}

export default Header;