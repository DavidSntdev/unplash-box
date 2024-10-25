import { getInfosCollection } from "@/app/utils/functions/getInfosCollections";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";
import Image from "next/image";

export default function CollectionItem({
  collection,
}: {
  collection: unplashCollection;
}) {
  const { collectionId, titulo, imagens, quantidade, existeImagem } =
    getInfosCollection(collection);

  return (
    <div
      key={collectionId}
      className="flex flex-col gap-3 mx-auto cursor-pointer"
    >
      {existeImagem && (
        <div className="w-[350px] h-[250px] overflow-hidden rounded-md shadow-md">
          <Image
            width={300}
            height={300}
            alt={titulo}
            src={imagens[0]}
            className="object-cover w-full h-full"
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
