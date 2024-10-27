import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";
import { useImageCollection } from "@/app/context/collectionContext";
import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import CollectionsList from "../collections/collectionsList";

type props = {
  imageId: UnsplashImage;
  collections: unplashCollection[];
};

export default function CollectionsSAC(props: props) {
  const { addImageToCollection } = useImageCollection();

  return (
    <div className="gap-4 overflow-y-auto max-h-full w-full">
      {props.collections.map((collection) => (
        <CollectionsList
          key={collection.id}
          collection={collection}
          text="Add to Collection"
          imageId={props.imageId}
          icone="/icons/Plus.svg"
          onClick={() => addImageToCollection(collection.id, props.imageId)}
        />
      ))}
    </div>
  );
}
