import { UnsplashImage } from "../interfaces/unplashimage";

export function getInfosImage(image: UnsplashImage) {
  return {
    criadorImagem: image.user.profile_image.large,
    criadorNome: image.user.name,
    dataCriacao: image.created_at,
    imageDownload: image.links.download,
  };
}
