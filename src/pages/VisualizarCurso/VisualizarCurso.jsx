import { useState, useEffect } from "react";
import Contato from "../../components/Contato/Contato";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Markup } from "interweave";
import iconeSolVerde from "../../assets/icone-sol-verde.png";
import iconeSolLaranja from "../../assets/icone-sol-laranja.png";
import iconeSolRosa from "../../assets/icone-sol-rosa.png";
import iconeSolDefault from "../../assets/icone-sol.png";
import iconeVerde from "../../assets/icone-verde.png";
import iconeLaranja from "../../assets/icone-laranja.png";
import iconeRosa from "../../assets/icone-rosa.png";
import iconeDefault from "../../assets/icone-default.png";
import axios from "axios";

import "./VisualizarCurso.css";

export default function VisualizarCurso() {
  const [curso, setCurso] = useState([]);

  useEffect(() => {
    let id = window.location.pathname.split("/");
    axios
      .get(`https://api-transformacao-digital.herokuapp.com/produto/${id[2]}`)
      .then((response) => {
        setCurso(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Header />
      {curso.map((curso, key) => {
        let corIconeSol;
        let corIcone;
        switch (curso.categorium.idCategoria) {
          case 24:
            corIconeSol = iconeSolLaranja;
            corIcone = iconeLaranja;
            break;
          case 34:
            corIconeSol = iconeSolVerde;
            corIcone = iconeVerde;
            break;
          case 44:
            corIconeSol = iconeSolRosa;
            corIcone = iconeRosa;
            break;
          default:
            corIconeSol = iconeSolDefault;
            corIcone = iconeDefault;
            break;
        }
        return (
          <div key={curso.idProduto}>
            <section className="banner-curso">
              <img src={curso.fotoProduto} alt="" />
            </section>
            <div className="icone-sol">
              <img src={corIconeSol} alt="icone-sol" />
            </div>
            <section className="detalhes-curso">
              <div className="icone-logo">
                <img src={corIcone} alt="" />
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
              <p className="investimento">
                Investimento: R${curso.investimentoProduto}
              </p>
            </section>
          </div>
        );
      })}
      <Contato />
      <Footer />
    </>
  );
}
