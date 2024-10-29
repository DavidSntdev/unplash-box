"use client";
import { getInfosCollection } from "@/app/utils/functions/getInfosCollections";
import { useImageCollection } from "@/app/context/collectionContext";
import { getCollection } from "@/app/utils/functions/getCollection";
import HeaderCollections from "../layouts/headerCollection";
import ImagesCollection from "./images";
import { Button } from "@/components/ui/button";
import { buttonStyle } from "@/app/utils/constants/buttonImage";

export default function ConteudoCollectionDetail({
  collectionTitle,
}: {
  collectionTitle: string;
}) {
  const { collections, deleteCollection } = useImageCollection();
  const collection = getCollection(collections, collectionTitle);
  if (!collection)
    return <div className="text-center">Collection not found</div>;

  const { titulo, quantidade } = getInfosCollection(collection);

  return (
    <div className="flex flex-col my-8 w-full">
      <HeaderCollections
        text={titulo}
        description={`${quantidade} Photos`}
        className="gap-2"
      />
      <Button
        className={`max-w-[200px] mx-auto mt-3 ${buttonStyle} cursor-pointer`}
        onClick={() => deleteCollection(collection.id)}
      >
        Deletar Coleção
      </Button>
      <ImagesCollection collection={collection} />
    </div>
  );
}
