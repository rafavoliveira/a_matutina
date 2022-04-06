import "./Contato.css";
import whatsapp from "../../assets/whatsapp-contato.png";
export default function Contato() {
  return (
    <section className="contato">
      <h3>Ficou com alguma dúvida? Fale com o nosso atendimento</h3>
      <a className="fale-conosco" href="#">
        <img src={whatsapp} alt="whatsapp-logo" />
        Fale Conosco
      </a>
    </section>
  );
}
