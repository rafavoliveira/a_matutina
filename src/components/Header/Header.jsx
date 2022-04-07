import "./Header.css";
import logomarca from "../../assets/logo.png";
import hamburger from "../../assets/hamburger.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav>
        <div className="icone-hamburger">
          <img src={hamburger} alt="" />
        </div>
        <div className="container-menu-responsivo">
          <ul className="menu-responsivo">
            <li className="item-menu-responsivo">
              <a href="#">Quem Somos</a>
            </li>
            <li className="item-menu-responsivo">
              <Link to="/cursos">Cursos</Link>
            </li>
            <li className="item-menu-responsivo">
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
        <div className="logo-container">
          <span>
            <Link to="/">
              <img className="logo" src={logomarca} alt="logomarca" />
            </Link>
          </span>
        </div>
        <div className="menu-container">
          <ul className="menu">
            <li className="item-menu">
              <a href="#">Quem Somos</a>
            </li>
            <li className="item-menu">
              <Link to="/cursos">Cursos</Link>
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
