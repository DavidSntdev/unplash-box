"use client";
import { useState } from "react";
import { getInfosCollection } from "@/app/utils/functions/getInfosCollections";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";
import { useImageCollection } from "@/app/context/collectionContext";
import Image from "next/image";

type CollectionsType = {
  collection: unplashCollection;
  key: number;
  imageUrl: string;
};

export default function CollectionsList(props: CollectionsType) {
  const { imagens, quantidade, titulo, collectionId } = getInfosCollection(
    props.collection
  );
  const { removeImageFromCollection } = useImageCollection();
  const [isHovered, setIsHovered] = useState(false);
  const hoverRemove = isHovered ? "block" : "hidden";

  return (
    <div
      key={props.key}
      className="text-sm flex items-center justify-between gap-4 text-gray-600 p-2 rounded-lg hover:bg-cinza cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => removeImageFromCollection(collectionId, props.imageUrl)}
    >
      <div className="flex gap-3 items-center">
        <div className="w-16 h-16 overflow-hidden rounded-md shadow-md">
          <Image
            width={60}
            height={60}
            alt={titulo}
            src={imagens[0]}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-azulEscuro font-semibold">{titulo}</span>
          <span className="text-azulEscuro text-xs">{quantidade} Photos</span>
        </div>
      </div>
      <div
        className={`transition-opacity duration-200 flex items-center gap-2 mr-3 ${hoverRemove}`}
      >
        <Image width={15} height={15} alt="Remove" src="/icons/Remove.svg" />
        <span className="text-azulEscuro text-[10px] font-semibold">
          Remove
        </span>
      </div>
    </div>
  );
}
