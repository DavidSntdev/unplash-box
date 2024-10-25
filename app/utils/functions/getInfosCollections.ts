import { unplashCollection } from "../interfaces/unplashCollection";

export function getInfosCollection(collection: unplashCollection) {
  return {
    titulo: collection.title,
    imagens: collection.images,
    quantidade: collection.images.length,
  };
}
