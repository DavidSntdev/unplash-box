"use client";
import { getInfosCollection } from "@/app/utils/functions/getInfosCollections";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";
import { getStyleLoading } from "@/app/utils/functions/getStyleLoading";
import { useRouterPush } from "@/app/utils/functions/useRouterPush";
import { useState } from "react";
import Image from "next/image";

export default function ImagesCollection({
  collection,
}: {
  collection: unplashCollection;
}) {
  const routerPush = useRouterPush();
  const { imagens, existeImagem } = getInfosCollection(collection);
  const [isLoading, setIsLoading] = useState(true);

  if (!existeImagem) {
    return (
      <div className="w-full text-center">
        There is no image in this collection
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full p-5 sm:p-10">
      {imagens.map((img) => (
        <div
          key={img.id}
          className="relative w-full group"
          style={{
            gridRowEnd: `span ${Math.ceil(img.height / img.width)}`,
          }}
          onClick={() => routerPush("/image/", img.id)}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center rounded-md">
              <div className="loading-spinner"></div>
            </div>
          )}
          <Image
            src={img.urls.small}
            alt={img.alt_description || ""}
            layout="responsive"
            width={img.width}
            height={img.height}
            className={`${getStyleLoading(
              isLoading
            )} rounded-md object-cover cursor-pointer transition-transform duration-200 ease-in-out group-hover:scale-105 group-hover:shadow-lg`}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
      ))}
    </div>
  );
}
