import { filterCollections } from "@/app/utils/functions/filterCollections";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";
import { Button } from "@/components/ui/button";

type ShowCollectionProps = {
  showAddCollection: boolean;
  addImageToCollection: (collectionId: number) => void;
  collections: unplashCollection[];
  imageUrl: string;
};

export default function ShowCollection(props: ShowCollectionProps) {
  const { hasFilteredCollectionOutside, filteredCollectionsOutside } =
    filterCollections(
      props.collections,
      props.imageUrl,
      props.showAddCollection
    );

  return (
    hasFilteredCollectionOutside && (
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-semibold">Add to Collection:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredCollectionsOutside.map((collection) => (
            <Button
              key={collection.id}
              className="bg-gray-200 hover:bg-gray-300 text-black"
              onClick={() => props.addImageToCollection(collection.id)}
            >
              {collection.title}
            </Button>
          ))}
        </div>
      </div>
    )
  );
}
