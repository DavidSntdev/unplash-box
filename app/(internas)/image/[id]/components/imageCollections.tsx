import { filterCollections } from "@/app/utils/functions/filterCollections";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";
import CollectionsList from "./collections/collectionsList";
import { useImageCollection } from "@/app/context/collectionContext";
import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";

type ImageCollections = {
  collections: unplashCollection[];
  imageId: UnsplashImage;
};

export default function ImageCollections(props: ImageCollections) {
  const { removeImageFromCollection } = useImageCollection();

  const { filteredCollectionsInside, hasFilteredCollectionsInside } =
    filterCollections(props.collections, props.imageId);

  return (
    hasFilteredCollectionsInside && (
      <div className="flex flex-col mt-4 gap-3">
        <h3 className="text-xl text-azulEscuro font-semibold">Collections</h3>
        <div className="flex flex-col gap-3">
          {filteredCollectionsInside.map((collection) => (
            <CollectionsList
              key={collection.id}
              collection={collection}
              imageId={props.imageId}
              text="Remove"
              icone="/icons/remove.svg"
              onClick={() =>
                removeImageFromCollection(collection.id, props.imageId)
              }
            />
          ))}
        </div>
      </div>
    )
  );
}
