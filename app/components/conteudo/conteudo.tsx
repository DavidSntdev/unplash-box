"use client";
import { Input } from "@/components/ui/input";
import ConteudoLayout from "../layouts/conteudoLayout";
import { useState } from "react";
import axios from "axios";
import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import Image from "next/image";

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

  let bgStyle = "";
  bgStyle = pesquisa
    ? "bg-[url('/images/gradiend-bg.svg')] bg-auto bg-no-repeat bg-top"
    : "bg-[url('/images/hero-image.png')] bg-auto lg:bg-contain bg-no-repeat bg-center";

  return (
    <ConteudoLayout className={`${bgStyle} flex items-center justify-center`}>
      {!pesquisa && (
        <div className="flex flex-col items-center w-[500px] gap-5 mb-32">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-4xl font-bold text-azulEscuro">Search</h1>
            <p className="text-azulEscuro">
              Search high-resolution images from Unsplash
            </p>
          </div>
          <Input
            type="text"
            placeholder="Enter your keywords..."
            value={query}
            onChange={handleInputChange}
            className="py-6"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-blue-500 text-white rounded"
          >
            Search
          </button>
        </div>
      )}
      {pesquisa && (
        <div className="flex flex-col place-self-start py-10 gap-5 w-[85%] md:w-[600px]">
          <Input
            type="text"
            placeholder="Enter your keywords..."
            value={query}
            onChange={handleInputChange}
            className="py-6 bg-white"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {imagens.length > 0 ? (
              imagens.map((img) => (
                <div key={img.id} className="flex flex-col items-center">
                  <Image
                    width={300}
                    height={300}
                    src={img.urls.small}
                    alt={img.alt_description || ""}
                    className="w-full h-auto"
                  />
                  <p>{img.description || img.alt_description}</p>
                </div>
              ))
            ) : (
              <p>No images found</p>
            )}
          </div>
        </div>
      )}
    </ConteudoLayout>
  );
}
