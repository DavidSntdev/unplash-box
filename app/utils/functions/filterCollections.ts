import { unplashCollection } from "../interfaces/unplashCollection";
import { UnsplashImage } from "../interfaces/unplashimage";

export const filterCollections = (
  collections: unplashCollection[],
  imagem: UnsplashImage,
  showAddCollection?: boolean
): {
  filteredCollectionsInside: unplashCollection[];
  hasFilteredCollectionsInside: boolean;
  filteredCollectionsOutside: unplashCollection[];
  hasFilteredCollectionOutside: boolean | undefined;
} => {
  const filteredCollectionsInside = collections.filter((collection) =>
    collection.images.includes(imagem)
  );

  const filteredCollectionsOutside = collections.filter(
    (collection) => !collection.images.includes(imagem)
  );

  const hasFilteredCollectionsInside = filteredCollectionsInside.length > 0;

  const hasFilteredCollectionOutside =
    filteredCollectionsOutside.length > 0 && showAddCollection;

  return {
    filteredCollectionsInside,
    hasFilteredCollectionsInside,
    filteredCollectionsOutside,
    hasFilteredCollectionOutside,
  };
};
