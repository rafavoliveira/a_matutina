import Header from "../../components/Header/Header";
import "./Home.css";
import autonomia from "../../assets/autonomia.png";
import inovacao from "../../assets/inovacao.png";
import acessibilidade from "../../assets/acessibilidade.png";
import conveniencia from "../../assets/conveniencia.png";

export default function Home() {
  return (
    <>
      <Header />
      <section className="banner">
        <div className="container">
          <div className="content">
            <h1>Abra as janelas</h1>
            <h1> para o conhecimento</h1>
            <button className="btn-subscribe">Inscreva-se</button>
          </div>
        </div>
      </section>
      <section className="diferenciais">
        <h2>cursos de capacitação digital para professores</h2>
        <div className="faixa"></div>
        <div className="diferenciais-content">
          <div className="item-diferenciais">
            <img src={autonomia} alt="" />
            <h3>Autonomia</h3>
          </div>
          <div className="item-diferenciais">
            <img src={acessibilidade} alt="acessbilidade" />
            <h3>Acessibilidade</h3>
          </div>
          <div className="item-diferenciais">
            <img src={inovacao} alt="inovação" />
            <h3>Inovação</h3>
          </div>
          <div className="item-diferenciais">
            <img src={conveniencia} alt="conveniência" />
            <h3>Conveniência</h3>
          </div>
        </div>
      </section>
      <section className="sobre"></section>
    </>
  );
}
