"use client";
import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import { useImageCollection } from "@/app/context/collectionContext";
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderImage from "./components/header";
import Imagem from "./components/imagem";
import ImageCollections from "./components/imageCollections";
import ShowCollection from "./components/showCollection";

export default function ConteudoImage({ id }: { id: string }) {
  const [imageData, setImageData] = useState<UnsplashImage | null>(null);
  const [showAddCollection, setShowAddCollection] = useState<boolean>(false);
  const { collections } = useImageCollection();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/${id}`,
          {
            headers: {
              Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
            },
          }
        );
        setImageData(response.data);
      } catch (error) {
        console.error("Erro ao buscar imagem", error);
      }
    };

    fetchImage();
  }, [id]);

  if (!imageData) {
    return <div className="mx-auto">Carregando...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl justify-center mx-auto p-10 sm:py-14 lg:p-14 md:items-center lg:items-start gap-10">
      <Imagem imageData={imageData} />
      <div className="flex flex-col gap-5 w-full sm:w-[600px] lg:w-1/2 ">
        <HeaderImage
          imageData={imageData}
          setShowAddCollection={setShowAddCollection}
        />
        <ShowCollection
          collections={collections}
          showAddCollection={showAddCollection}
          imageUrl={imageData.urls.full}
          setShowAddCollection={setShowAddCollection}
        />
        <ImageCollections
          collections={collections}
          imageUrl={imageData.urls.full}
        />
      </div>
    </div>
  );
}
