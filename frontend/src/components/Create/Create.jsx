import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../api/api";

import Select from "react-select";

import "./Create.css";
import { useEffect } from "react";

function Create() {
  const navigate = useNavigate();

  /*
  - Estado para guardar a lista de categorias
  - Preparar uma função que pega a lista de categorias no backend
    - Pegar a URL do ReadAll de Categorias
    - Fazer uma requisição GET
    - Pegar o body da requisição, que está em JSON
    - Atualizar a lista de categorias recebida no estado, criado anteriormente
  - Executar a função que foi preparada
  - Pegar a lista de categorias do estado e colocá-la nas options do ReactSelect
  */

  const [categories, setCategories] = useState();

  async function loadCategories() {
    const readAll = Api.category.readAll();

    const response = await Api.buildApiGetRequest(readAll);

    const result = await response.json();

    setCategories(result);
  }

  useEffect(function () {
    loadCategories();
  }, []);

  async function processarSubmit(event) {
    event.preventDefault();

    const name = event.target.nome.value;
    const imageUrl = event.target.imagemUrl.value;
    const category = event.target.category.value;

    const payload = {
      name,
      imageUrl,
      category,
    };

    const createUrl = Api.item.create();
    const response = await Api.buildApiPostRequest(createUrl, payload);
    const body = await response.json();

    if (response.status === 201) {
      alert("Item criado com sucesso!");
      navigate("/");
    } else {
      alert("Algum erro ocorreu, tente novamente.");
    }
  }

  return (
    <div className="Create">
      <form onSubmit={processarSubmit}>
        <div>
          <label htmlFor="nome">Nome*:</label>
          <input type="text" id="nome" />
        </div>

        <div>
          <label htmlFor="imagemUrl">URL da Imagem*:</label>
          <input type="text" id="imagemUrl" />
        </div>

        <div>
          <label htmlFor="category">Categoria*:</label>
          <Select
            options={categories?.map(function (category) {
              return { value: category._id, label: category.name };
            })}
            name="category"
          />
        </div>

        <div>
          <input type="submit" value="Adicionar" />
        </div>
      </form>
    </div>
  );
}

export default Create;
