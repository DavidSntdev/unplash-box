import { unplashCollection } from "../interfaces/unplashCollection";

export const filterCollections = (
  collections: unplashCollection[],
  imageUrl: string,
  showAddCollection?: boolean
): {
  filteredCollectionsInside: unplashCollection[];
  hasFilteredCollectionsInside: boolean;
  filteredCollectionsOutside: unplashCollection[];
  hasFilteredCollectionOutside: boolean | undefined;
} => {
  const filteredCollectionsInside = collections.filter((collection) =>
    collection.images.includes(imageUrl)
  );

  const filteredCollectionsOutside = collections.filter(
    (collection) => !collection.images.includes(imageUrl)
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
