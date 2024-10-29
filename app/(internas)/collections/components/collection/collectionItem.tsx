"use client";
import { getInfosCollection } from "@/app/utils/functions/getInfosCollections";
import { useRouterPush } from "@/app/utils/functions/useRouterPush";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";
import { useState } from "react";
import Image from "next/image";
import { getStyleLoading } from "@/app/utils/functions/getStyleLoading";

export default function CollectionItem({
  collection,
}: {
  collection: unplashCollection;
}) {
  const { collectionId, titulo, imagens, quantidade, existeImagem } =
    getInfosCollection(collection);

  const routerPush = useRouterPush();

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      key={collectionId}
      className="flex flex-col gap-1 mx-auto cursor-pointer w-full max-w-[350px] "
      onClick={() => routerPush("/collections/", titulo)}
    >
      {existeImagem && (
        <div className="w-full max-w-[350px] h-[250px] overflow-hidden rounded-md shadow-md">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center rounded-md">
              <div className="loading-spinner"></div>
            </div>
          )}
          <Image
            width={300}
            height={300}
            alt={titulo}
            src={imagens[0].urls.full}
            className={`${getStyleLoading(
              isLoading
            )} object-cover w-full h-full`}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
      )}
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold">{titulo}</h2>
        <p className="text-xs text-cinzaEscuro ">{quantidade} Photos</p>
      </div>
    </div>
  );
}
