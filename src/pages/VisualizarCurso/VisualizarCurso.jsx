import { useState, useEffect } from "react";
import Contato from "../../components/Contato/Contato";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { CursoSelecionado } from "../../services/api-rotas-curso";
import { Markup } from "interweave";
import "./VisualizarCurso.css";

export default function VisualizarCurso() {
  const [curso, setCurso] = useState([]);

  const getCursoSelecionado = async () => {
    const response = await CursoSelecionado();

    setCurso(response);
  };

  useEffect(() => {
    getCursoSelecionado();
  });
  return (
    <>
      <Header />
      {curso.map((curso, key) => {
        return (
          <>
            <section key={curso.idProduto} className="banner-curso">
              <img src={curso.fotoProduto} alt="" />
            </section>
            <section className="detalhes-curso">
              <div className="icone-logo">
                <img src="#" alt="" />
              </div>
              <div className="titulo-curso">
                <h1>{curso.nomeProduto}</h1>
              </div>
              <div className="cronograma">
                <div className="dias-da-semana">
                  <p>{curso.diasSemanaProduto}</p>
                </div>
                <div className="data-curso">
                  <p>{curso.dataSemanaProduto}</p>
                </div>
              </div>
              <div className="conteudo-curso">
                <Markup content={curso.descricaoProduto} />
              </div>
              <p className="investimento">{curso.investimento}</p>
            </section>
          </>
        );
      })}
      <Contato />
      <Footer />
    </>
  );
}
