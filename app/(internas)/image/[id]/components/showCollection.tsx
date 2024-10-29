"use client";
import { filterCollections } from "@/app/utils/functions/filterCollections";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";
import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import { useState } from "react";
import HeaderSAC from "./showCollection/header";
import SearchSAC from "./showCollection/search";
import CollectionsSAC from "./showCollection/collections";

type ShowCollectionProps = {
  showAddCollection: boolean;
  collections: unplashCollection[];
  imageId: UnsplashImage;
  setShowAddCollection: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ShowCollection(props: ShowCollectionProps) {
  const [pesquisa, setPesquisa] = useState("");

  const { hasFilteredCollectionOutside, filteredCollectionsOutside } =
    filterCollections(
      props.collections,
      props.imageId,
      props.showAddCollection
    );

  const filteredCollectionsBySearch = filteredCollectionsOutside.filter(
    (collection) =>
      collection.title.toLowerCase().includes(pesquisa.toLowerCase())
  );

  if (!hasFilteredCollectionOutside) {
    props.setShowAddCollection(false);
  }

  return (
    hasFilteredCollectionOutside && (
      <div className="items-center justify-center fixed inset-0 flex bg-black/30 z-50">
        <div className="flex flex-col bg-white p-6 gap-6 rounded-md h-screen w-full sm:w-[640px] sm:h-[640px]">
          <HeaderSAC setShowAddCollection={props.setShowAddCollection} />
          <SearchSAC pesquisa={pesquisa} setPesquisa={setPesquisa} />
          <CollectionsSAC
            collections={filteredCollectionsBySearch}
            imageId={props.imageId}
          />
        </div>
      </div>
    )
  );
}
