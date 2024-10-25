"use client";
import { useImageCollection } from "@/app/context/collectionContext";
import CollectionItem from "./collection/collectionItem";

export default function CollectionsList() {
  const { collections } = useImageCollection();

  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 w-full gap-5 py-10 px-20">
      {collections.map((collection) => (
        <CollectionItem key={collection.id} collection={collection} />
      ))}
    </div>
  );
}
