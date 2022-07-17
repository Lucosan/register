import logo from "../../assets/img/logo.svg";
import "./styles.css";
function Header() {

    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>Registro de Divergências</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/Lucosan">Lucca Santos</a>
                </p>
            </div>
        </header>
    )
}

export default Header;
