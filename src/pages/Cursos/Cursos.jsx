import Contato from "../../components/Contato/Contato";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Cursos.css";
import iconeVerde from "../../assets/icone-verde.png";
import iconeLaranja from "../../assets/icone-laranja.png";
import iconeRosa from "../../assets/icone-rosa.png";
import iconeDefault from "../../assets/icone-default.png";
import { Link } from "react-router-dom";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);
  useEffect(() => {
    axios
      .get("https://api-transformacao-digital.herokuapp.com/produto")
      .then((response) => {
        setCursos(response.data);
      })
      .catch(() => {
        console.log("Deu errado");
      });
  }, []);
  return (
    <>
      <Header />
      <section className="todos-cursos">
        <div className="titulo-container">
          <h1>Todos os Cursos</h1>
        </div>
        <div className="container-cursos">
          {cursos.map((curso, key) => {
            let corIcone;
            let corBtn;
            switch (curso.categorium.idCategoria) {
              case 24:
                corIcone = iconeLaranja;
                corBtn = "#f7941d";

                break;
              case 34:
                corIcone = iconeVerde;
                corBtn = "#338e8a";

                break;
              case 44:
                corIcone = iconeRosa;
                corBtn = "#ed145b";

                break;
              default:
                corIcone = iconeDefault;
            }

            return (
              <div className="item-curso">
                <div className="img-curso">
                  <img src={curso.fotoProduto} alt="" />
                </div>
                <h3>{curso.nomeProduto}</h3>
                <div className="detalhes-curso">
                  <p>
                    {`${curso.cargaHorariaProduto}h [${curso.categorium.nomeCategoria}] `}
                  </p>
                  <img className="icone-categoria" src={corIcone} alt="" />
                </div>
                <Link
                  style={{ backgroundColor: `${corBtn}` }}
                  className="ver-curso"
                >
                  Ver Curso
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <Contato />
      <Footer />
    </>
  );
}
