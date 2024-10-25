import { filterCollections } from "@/app/utils/functions/filterCollections";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";
import CollectionsList from "./collections/collectionsList";
import { useImageCollection } from "@/app/context/collectionContext";

type ImageCollections = {
  collections: unplashCollection[];
  imageUrl: string;
};

export default function ImageCollections(props: ImageCollections) {
  const { removeImageFromCollection } = useImageCollection();

  const { filteredCollectionsInside, hasFilteredCollectionsInside } =
    filterCollections(props.collections, props.imageUrl);

  return (
    hasFilteredCollectionsInside && (
      <div className="flex flex-col mt-4 gap-3">
        <h3 className="text-xl text-azulEscuro font-semibold">Collections</h3>
        <div className="flex flex-col gap-3">
          {filteredCollectionsInside.map((collection) => (
            <CollectionsList
              key={collection.id}
              collection={collection}
              imageUrl={props.imageUrl}
              text="Remove"
              icone="/icons/Remove.svg"
              onClick={() =>
                removeImageFromCollection(collection.id, props.imageUrl)
              }
            />
          ))}
        </div>
      </div>
    )
  );
}
