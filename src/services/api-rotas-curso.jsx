import api from "./api";

export const VisualizarCurso = async () => {
  try {
    const response = await api.get("/produto");

    return response.data;
  } catch (error) {
    return `${error.response.status}`;
  }
};

export const CursoSelecionado = async () => {
  try {
    let id = window.location.pathname.split("/");
    const response = await api.get(`/produto/${id[2]}`);

    return response.data;
  } catch (error) {
    return `${error.response}`;
  }
};
