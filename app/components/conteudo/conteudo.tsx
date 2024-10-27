"use client";
import ConteudoLayout from "../layouts/conteudoLayout";
import { useState } from "react";
import NaoPesquisado from "./components/naoPesquisado";
import getBgStyle from "@/app/utils/functions/getBgStyle";
import { useRouterPush } from "@/app/utils/functions/useRouterPush";

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
      className={`${getBgStyle(pesquisa)} flex items-center justify-center`}
    >
      {!pesquisa && (
        <NaoPesquisado
          query={query}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
        />
      )}
    </ConteudoLayout>
  );
}
