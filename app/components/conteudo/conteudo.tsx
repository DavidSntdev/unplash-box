"use client";
import { useState } from "react";
import { useRouterPush } from "@/app/utils/functions/useRouterPush";
import ConteudoLayout from "../layouts/conteudoLayout";
import getBgStyle from "@/app/utils/functions/getBgStyle";
import Pesquisar from "./components/pesquisar";

export default function Conteudo() {
  const [pesquisa, setPesquisa] = useState(false);
  const [query, setQuery] = useState("");
  const routerPush = useRouterPush();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query) {
      setPesquisa(true);
      routerPush("/search/", query);
    }
  };

  return (
    <ConteudoLayout
      className={`${getBgStyle(
        pesquisa
      )} flex items-center justify-center px-3`}
    >
      {!pesquisa && (
        <Pesquisar
          query={query}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
        />
      )}
    </ConteudoLayout>
  );
}
