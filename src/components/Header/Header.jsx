import "./Header.css";
import logomarca from "../../assets/logo.png";
export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo-container">
          <span>
            <img className="logo" src={logomarca} alt="logomarca" />
          </span>
        </div>
        <div className="menu-container">
          <ul className="menu">
            <li className="item-menu">
              <a href="#">Quem Somos</a>
            </li>
            <li className="item-menu">
              <a href="#">Cursos</a>
            </li>
            <li className="item-menu">
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
