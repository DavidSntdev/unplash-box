import { unplashCollection } from "../interfaces/unplashCollection";

export function getInfosCollection(collection: unplashCollection) {
  return {
    collectionId: collection.id,
    titulo: collection.title,
    imagens: collection.images,
    quantidade: collection.images.length,
    existeImagem: collection.images.length > 0,
  };
}
