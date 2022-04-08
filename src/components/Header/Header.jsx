import "./Header.css";
import logomarca from "../../assets/logo.png";
import hamburger from "../../assets/hamburger.png";
import iconeUsuario from "../../assets/usuario.png";
import iconeAcademia from "../../assets/academia.png";
import iconeEmail from "../../assets/email-menu.png";

import { Link } from "react-router-dom";
export default function Header() {
  const handleMenu = () => {
    const menuResponsivo = document.getElementById("menuResponsivo");
    menuResponsivo.classList.toggle("ativo");
  };
  return (
    <header>
      <nav>
        <div
          onClick={handleMenu}
          id="iconeHamburger"
          className="icone-hamburger"
        >
          <img src={hamburger} alt="" />
        </div>
        <div id="menuResponsivo" className="container-menu-responsivo">
          <ul className="menu-responsivo">
            <li className="item-menu-responsivo">
              <img src={iconeUsuario} alt="icone-usuario" />
              <a href="#">Quem Somos</a>
            </li>
            <li className="item-menu-responsivo">
              <img src={iconeAcademia} alt="icone-academia" />

              <Link to="/cursos">Cursos</Link>
            </li>
            <li className="item-menu-responsivo">
              <img src={iconeEmail} alt="icone-email" />

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
