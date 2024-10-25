import { getInfosCollection } from "@/app/utils/functions/getInfosCollections";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";
import Image from "next/image";

type CollectionsType = {
  collection: unplashCollection;
  key: number;
};

export default function CollectionsList(props: CollectionsType) {
  const { imagens, quantidade, titulo } = getInfosCollection(props.collection);

  return (
    <div
      key={props.key}
      className="text-sm flex items-center gap-4 text-gray-600 p-2 rounded-lg hover:bg-cinza cursor-pointer"
    >
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
  );
}
