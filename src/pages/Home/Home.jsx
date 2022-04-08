import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import autonomia from "../../assets/autonomia.png";
import inovacao from "../../assets/inovacao.png";
import acessibilidade from "../../assets/acessibilidade.png";
import conveniencia from "../../assets/conveniencia.png";
import porqueInvestir from "../../assets/porque-investir.png";
import icone from "../../assets/icone-sol.png";
import homem from "../../assets/homem.png";
import Contato from "../../components/Contato/Contato";
import Slide from "../../components/Slide/Slide";
import "swiper/css/bundle";

export default function Home() {
  return (
    <>
      <Header />
      <section className="banner">
        <div className="container">
          <div className="content">
            <h1>Abra as janelas</h1>
            <h1> para o conhecimento</h1>
            <a
              href="https://taa8wa8r1pa.typeform.com/to/lyXemNvy"
              target="_blank"
              className="btn-subscribe"
            >
              Inscreva-se
            </a>
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
      <Slide />
      <section className="sobre">
        <div className="icone">
          <img src={icone} alt="icone-sol" />
        </div>
        <div className="row">
          <div className="row-img">
            <img src={porqueInvestir} alt="imagem-mulher" />
          </div>
          <div className="row-text">
            <h1>Por quê investir em capacitação digital?</h1>
            <p>
              O uso de ferramentas digitais na educação é uma realidade
              irreversível e os professores que conseguirem se adaptar a esse
              cenário irão se destacar e abrir janelas de oportunidades
              profissionais. A busca por conhecimento e atualização é sempre
              positiva e pode contribuir significativamente para a capacidade
              didática de transmitir conteúdos e engajar os alunos nas salas de
              aula, sejam elas presenciais, online ou híbridas.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="row-text">
            <h1>Quem Somos </h1>
            <p>
              Somos um plataforma de ensino que acredita no poder da combinação
              entre a internet e o conhecimento para transformar vidas.
            </p>
            <p>
              Oferecemos cursos de capacitação digital para profissionais da
              área de educação, além de conteúdo voltado para a alfabetização
              digital e promoção de boas práticas nas redes.
            </p>
            <p>Deixe a luz da manhã iluminar o seu futuro.</p>
          </div>
          <div className="row-img">
            <img src={homem} alt="imagem-homem" />
          </div>
        </div>
      </section>
      <Contato />
      <Footer />
    </>
  );
}
