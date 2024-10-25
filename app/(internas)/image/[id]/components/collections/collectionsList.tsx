"use client";
import { useState } from "react";
import { getInfosCollection } from "@/app/utils/functions/getInfosCollections";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";
import Image from "next/image";
import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";

type CollectionsType = {
  key: number;
  text: string;
  icone: string;
  imageId: UnsplashImage;
  onClick: () => void;
  collection: unplashCollection;
};

export default function CollectionsList(props: CollectionsType) {
  const { imagens, quantidade, titulo, existeImagem } = getInfosCollection(
    props.collection
  );
  const [isHovered, setIsHovered] = useState(false);
  const hoverRemove = isHovered ? "block" : "hidden";

  return (
    <div
      key={props.key}
      className="text-sm flex items-center justify-between gap-4 text-gray-600 p-2 rounded-lg hover:bg-cinza cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={props.onClick}
    >
      <div className="flex gap-4 items-center">
        {existeImagem && (
          <div className="w-16 h-16 overflow-hidden rounded-md shadow-md">
            <Image
              width={70}
              height={70}
              alt={titulo}
              src={imagens[0].urls.full}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="flex flex-col gap-[6px]">
          <span className="text-azulEscuro font-semibold">{titulo}</span>
          <span className="text-azulEscuro text-xs">{quantidade} Photos</span>
        </div>
      </div>
      <div
        className={`${hoverRemove} transition-opacity duration-200 flex items-center gap-2 mr-3`}
      >
        <Image width={15} height={15} alt={props.text} src={props.icone} />
        <span className="text-azulEscuro text-xs font-semibold">
          {props.text}
        </span>
      </div>
    </div>
  );
}
