import { unplashCollection } from "../interfaces/unplashCollection";

export const getCollection = (
  collections: unplashCollection[],
  collectionTitle: string
) => collections.find((collection) => collection.title === collectionTitle);
