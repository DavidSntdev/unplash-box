"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";
import { useRouterPush } from "@/app/utils/functions/useRouterPush";
import axios from "axios";
import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import ConteudoLayout from "@/app/components/layouts/conteudoLayout";
import getBgStyle from "@/app/utils/functions/getBgStyle";

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
        <div className="relative w-full md:w-[600px] mx-auto">
          <Input
            type="text"
            placeholder="Enter your keywords..."
            value={query}
            onChange={handleInputChange}
            className="py-6 bg-white w-[85%] md:w-[600px] pr-12"
          />
          <Image
            onClick={handleSearch}
            src="/icons/search.svg"
            alt="search"
            width={25}
            height={25}
            className="absolute right-3 top-3 cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full p-5 sm:p-10">
          {imagens.length > 0 ? (
            imagens.map((img) => (
              <div
                key={img.id}
                className="relative w-full group"
                style={{
                  gridRowEnd: `span ${Math.ceil(img.height / img.width)}`,
                }}
                onClick={() => routerPush("/image/", img.id)}
              >
                <Image
                  src={img.urls.small}
                  alt={img.alt_description || ""}
                  layout="responsive"
                  width={img.width}
                  height={img.height}
                  className="rounded-md object-cover cursor-pointer transition-transform duration-200 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
                />
              </div>
            ))
          ) : (
            <p>No images found</p>
          )}
        </div>
      </div>
    </ConteudoLayout>
  );
}
