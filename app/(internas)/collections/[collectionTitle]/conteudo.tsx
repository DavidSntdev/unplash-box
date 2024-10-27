"use client";
import { getInfosCollection } from "@/app/utils/functions/getInfosCollections";
import { useImageCollection } from "@/app/context/collectionContext";
import { getCollection } from "@/app/utils/functions/getCollection";
import HeaderCollections from "../layouts/headerCollection";
import ImagesCollection from "./images";

export default function ConteudoCollectionDetail({
  collectionTitle,
}: {
  collectionTitle: string;
}) {
  const { collections } = useImageCollection();
  const collection = getCollection(collections, collectionTitle);
  if (!collection) return <div className="mx-auto">Collection not found</div>;

  const { titulo, quantidade } = getInfosCollection(collection);

  return (
    <div className="flex flex-col my-8 w-full">
      <HeaderCollections
        text={titulo}
        description={`${quantidade} Photos`}
        className="gap-2"
      />
      <ImagesCollection collection={collection} />
    </div>
  );
}
