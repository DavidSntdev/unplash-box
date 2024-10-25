import { useImageCollection } from "@/app/context/collectionContext";
import { filterCollections } from "@/app/utils/functions/filterCollections";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";
import CollectionsList from "./collections/collectionsList";
import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";

type ShowCollectionProps = {
  showAddCollection: boolean;
  collections: unplashCollection[];
  imageId: UnsplashImage;
  setShowAddCollection: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ShowCollection(props: ShowCollectionProps) {
  const { addImageToCollection } = useImageCollection();

  const { hasFilteredCollectionOutside, filteredCollectionsOutside } =
    filterCollections(
      props.collections,
      props.imageId,
      props.showAddCollection
    );

  if (!hasFilteredCollectionOutside) {
    props.setShowAddCollection(false);
  }

  return (
    hasFilteredCollectionOutside && (
      <div className="items-center justify-center fixed inset-0 flex bg-black/30 z-50">
        <div className="flex flex-col bg-white p-6 gap-5 rounded-md h-[700px] w-[700px]">
          <h1 className="text-lg text-azulEscuro font-semibold">
            Add to Collections
          </h1>
          <div className="gap-4 overflow-y-auto max-h-full w-full">
            {filteredCollectionsOutside.map((collection) => (
              <CollectionsList
                key={collection.id}
                collection={collection}
                imageId={props.imageId}
                text="Add to Collection"
                icone="/icons/Plus.svg"
                onClick={() =>
                  addImageToCollection(collection.id, props.imageId)
                }
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
}
