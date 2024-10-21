"use client";
import ConteudoLayout from "../layouts/conteudoLayout";
import { useState } from "react";
import axios from "axios";
import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import NaoPesquisado from "./components/naoPesquisado";
import Pesquisado from "./components/pesquisado";
import getBgStyle from "@/app/utils/functions/getBgStyle";

export default function Conteudo() {
  const [pesquisa, setPesquisa] = useState(false);
  const [query, setQuery] = useState("");
  const [imagens, setImagens] = useState<UnsplashImage[]>([]);

  const searchUnsplash = async (query: string) => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query },
          headers: {
            Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
          },
        }
      );
      setImagens(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar imagens do Unsplash", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query) {
      setPesquisa(true);
      searchUnsplash(query);
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
      {pesquisa && (
        <Pesquisado
          query={query}
          handleInputChange={handleInputChange}
          imagens={imagens}
        />
      )}
    </ConteudoLayout>
  );
}
