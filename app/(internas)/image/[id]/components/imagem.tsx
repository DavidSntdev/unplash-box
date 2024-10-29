import { getStyleLoading } from "@/app/utils/functions/getStyleLoading";
import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import Image from "next/image";
import { useState } from "react";

export default function Imagem({ imageData }: { imageData: UnsplashImage }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full sm:w-[600px] lg:w-1/2">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center rounded-md">
          <div className="loading-spinner"></div>
        </div>
      )}
      <Image
        width={500}
        height={500}
        src={imageData.urls.full}
        alt={imageData.alt_description || ""}
        className={`rounded-md shadow-lg ${getStyleLoading(isLoading)}`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}
