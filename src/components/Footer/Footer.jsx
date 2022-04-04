import "./Footer.css";
import whatsapp from "../../assets/whatsapp.png";
import email from "../../assets/email.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import spotify from "../../assets/spotify.png";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="contatos">
          <p>Fale Conosco</p>
          <ul>
            <li>
              <a href="#">
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={email} alt="email" />
              </a>
            </li>
          </ul>
        </div>
        <div className="logo-footer">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="redes-sociais">
          <p>Nossas Redes</p>
          <ul>
            <li>
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={spotify} alt="spotify" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
