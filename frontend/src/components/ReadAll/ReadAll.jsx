import { useEffect } from "react";
import { useState } from "react";
import { Api } from "../../api/api";
import ItemCard from "../ItemCard/ItemCard";
import "./ReadAll.css";

function ReadAll() {
  const [itens, setItens] = useState();

  async function realizarRequisicao() {
    const readAllUrl = Api.item.readAll();

    const response = await Api.buildApiGetRequest(readAllUrl);

    const resultado = await response.json();

    setItens(resultado);
  }

  useEffect(function () {
    realizarRequisicao();
  }, []);

  if (itens === undefined) {
    return <div>Carregando...</div>;
  }

  console.log(itens);

  return (
    <div className="ReadAll">
      {itens.map(function (item, index) {
        return <ItemCard key={`item-card-${index}`} item={item} />;
      })}
    </div>
  );
}

export default ReadAll;
