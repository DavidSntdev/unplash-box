import { filterCollections } from "@/app/utils/functions/filterCollections";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";

type ImageCollections = {
  collections: unplashCollection[];
  imageUrl: string;
};

export default function ImageCollections(props: ImageCollections) {
  const { filteredCollectionsInside, hasFilteredCollectionsInside } =
    filterCollections(props.collections, props.imageUrl);

  return (
    hasFilteredCollectionsInside && (
      <div className="flex flex-col gap-2">
        <h3 className="text-lg text-azulEscuro font-semibold">Coleções</h3>
        {filteredCollectionsInside.map((collectionTitle, index) => (
          <span key={index} className="text-sm text-gray-600">
            {collectionTitle.title}
          </span>
        ))}
      </div>
    )
  );
}
