import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import Image from "next/image";

export default function Imagem({ imageData }: { imageData: UnsplashImage }) {
  return (
    <Image
      width={500}
      height={500}
      src={imageData.urls.full}
      alt={imageData.alt_description || ""}
      className="w-full sm:w-[600px] lg:w-1/2 rounded-md shadow-lg"
    />
  );
}
