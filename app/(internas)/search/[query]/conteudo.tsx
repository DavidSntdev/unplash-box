"use client";
import React, { useState } from "react";
import { useRouterPush } from "@/app/utils/functions/useRouterPush";
import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import ConteudoLayout from "@/app/components/layouts/conteudoLayout";
import getBgStyle from "@/app/utils/functions/getBgStyle";
import ImagensPesquisa from "./conteudo/imagens";
import HeaderPesquisa from "./conteudo/header";
import axios from "axios";

export default function ConteudoPesquisa(props: { query: string }) {
  const routerPush = useRouterPush();
  const [query, setQuery] = useState(props.query || "");
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

  const isMounted = React.useRef(false);
  if (!isMounted.current) {
    isMounted.current = true;
    if (query) {
      searchUnsplash(query);
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query) {
      routerPush("/search/", query);
      searchUnsplash(query);
    }
  };

  return (
    <ConteudoLayout
      className={`${getBgStyle(true)} flex items-center justify-center`}
    >
      <div className="flex flex-col place-self-start py-14 gap-5 w-full">
        <HeaderPesquisa
          query={query}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
        />
        <ImagensPesquisa imagens={imagens} routerPush={routerPush} />
      </div>
    </ConteudoLayout>
  );
}
