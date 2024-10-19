"use client";
import { Input } from "@/components/ui/input";
import ConteudoLayout from "../layouts/conteudoLayout";
import { useState } from "react";

export default function Conteudo() {
  const [pesquisa, setPesquisa] = useState(false);

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
            className="py-6"
          />
        </div>
      )}
      {pesquisa && (
        <div className="flex flex-col place-self-start py-10 gap-5 w-[85%] md:w-[600px]">
          <Input
            type="text"
            placeholder="Enter your keywords..."
            className="py-6 bg-white"
          />
        </div>
      )}
    </ConteudoLayout>
  );
}
