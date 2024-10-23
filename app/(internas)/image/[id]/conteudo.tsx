"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";
import HeaderImage from "./components/header";
import Imagem from "./components/imagem";
import MostrarImagem from "./components/mostrarImagem";
import ImageCollections from "./components/imageCollections";

export default function ConteudoImage({ id }: { id: string }) {
  const [imageData, setImageData] = useState<UnsplashImage | null>(null);
  const [collections, setCollections] = useState<unplashCollection[]>([]);
  const [showAddCollection, setShowAddCollection] = useState<boolean>(false);
  const [imageCollections, setImageCollections] = useState<string[]>([]);

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

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get("/api/collections");
        setCollections(response.data);

        const collectionsWithImage = response.data
          .filter((collection: unplashCollection) =>
            imageData?.urls.full
              ? collection.images.includes(imageData.urls.full)
              : false
          )
          .map((collection: unplashCollection) => collection.title);

        setImageCollections(collectionsWithImage);
      } catch (error) {
        console.error("Erro ao buscar coleções", error);
      }
    };

    fetchCollections();
  }, [imageData]);
  const addImageToCollection = async (collectionId: number) => {
    if (!imageData) return;

    const collection = collections.find((col) => col.id === collectionId);

    try {
      const response = await axios.post(
        `/api/collections/${collectionId}/images`,
        {
          imageUrl: imageData.urls.full,
        }
      );

      if (response.status === 200) {
        if (collection?.title) {
          setImageCollections((prev) => [...prev, collection.title]);
        }
      }
    } catch (error) {
      console.error("Erro ao adicionar imagem à coleção", error);
    }
  };

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
        <MostrarImagem
          showAddCollection={showAddCollection}
          setShowAddCollection={setShowAddCollection}
          addImageToCollection={addImageToCollection}
          collections={collections}
        />
        <ImageCollections imageCollections={imageCollections} />
      </div>
    </div>
  );
}
