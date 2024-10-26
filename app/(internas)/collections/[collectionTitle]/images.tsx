"use client";
import Image from "next/image";
import { getInfosCollection } from "@/app/utils/functions/getInfosCollections";
import { useImageCollection } from "@/app/context/collectionContext";
import { useRouterPush } from "@/app/utils/functions/useRouterPush";
import { getCollection } from "@/app/utils/functions/getCollection";

export default function ImagesCollection({
  collectionTitle,
}: {
  collectionTitle: string;
}) {
  const { collections } = useImageCollection();
  const routerPush = useRouterPush();

  const collection = getCollection(collections, collectionTitle);

  if (!collection) {
    return <div>Collection not found</div>;
  }

  const { imagens, existeImagem } = getInfosCollection(collection);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full p-5 sm:p-10">
      {existeImagem ? (
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
        <p>There is no image in this collection</p>
      )}
    </div>
  );
}
