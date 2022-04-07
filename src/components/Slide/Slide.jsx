import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import iconeVerde from "../../assets/icone-verde.png";
import iconeLaranja from "../../assets/icone-laranja.png";
import iconeRosa from "../../assets/icone-rosa.png";
import iconeDefault from "../../assets/icone-default.png";
import "./Slide.css";
import iconeSol from "../../assets/icone-sol-pequeno.png";

export default function Slide() {
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
    <section className="cursos">
      <div className="icone-sol">
        <img src={iconeSol} alt="" />
      </div>
      <div className="slide-responsivo">
        <h2>Cursos Disponíveis</h2>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {cursos.map((curso, key) => {
            let corIcone;
            switch (curso.categorium.idCategoria) {
              case 24:
                corIcone = iconeLaranja;
                break;
              case 34:
                corIcone = iconeVerde;
                break;
              case 44:
                corIcone = iconeRosa;
                break;
              default:
                corIcone = iconeDefault;
            }

            return (
              <SwiperSlide>
                <div className="item-slide">
                  <div className="img-slide">
                    <img src={curso.fotoProduto} alt="" />
                  </div>
                  <h3>{curso.nomeProduto}</h3>
                  <div className="text-slide">
                    <p>{`${curso.cargaHorariaProduto}h [${curso.categorium.nomeCategoria}] `}</p>
                    <img className="icone-categoria" src={corIcone} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="slide">
        <h2>Cursos Disponíveis</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          className="mySwiper"
        >
          {cursos.map((curso, key) => {
            let corIcone;
            switch (curso.categorium.idCategoria) {
              case 24:
                corIcone = iconeLaranja;
                break;
              case 34:
                corIcone = iconeVerde;
                break;
              case 44:
                corIcone = iconeRosa;
                break;
              default:
                corIcone = iconeDefault;
            }

            return (
              <SwiperSlide>
                <div className="item-slide">
                  <div className="img-slide">
                    <img src={curso.fotoProduto} alt="" />
                  </div>
                  <h3>{curso.nomeProduto}</h3>
                  <div className="text-slide">
                    <p>{`${curso.cargaHorariaProduto}h [${curso.categorium.nomeCategoria}] `}</p>
                    <img className="icone-categoria" src={corIcone} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
