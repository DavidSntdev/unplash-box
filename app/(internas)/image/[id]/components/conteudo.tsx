"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { buttonStyle } from "@/app/utils/constants/buttonImage";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";

interface ConteudoImageProps {
  id: string;
}

export default function ConteudoImage({ id }: ConteudoImageProps) {
  const [imageData, setImageData] = useState<UnsplashImage | null>(null);
  const [collections, setCollections] = useState<unplashCollection[]>([]);
  const [feedback, setFeedback] = useState<string>("");
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
    if (collection?.images.includes(imageData.urls.full)) {
      setFeedback(`Imagem já existe na coleção "${collection.title}"`);
      return;
    }

    try {
      const response = await axios.post(
        `/api/collections/${collectionId}/images`,
        {
          imageUrl: imageData.urls.full,
        }
      );

      if (response.status === 200) {
        setFeedback(
          `Imagem adicionada à coleção "${collection?.title}" com sucesso!`
        );

        if (collection?.title) {
          setImageCollections((prev) => [...prev, collection.title]);
        }
      }
    } catch (error) {
      console.error("Erro ao adicionar imagem à coleção", error);
      setFeedback("Erro ao adicionar imagem à coleção. Tente novamente.");
    }
  };

  if (!imageData) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl justify-center mx-auto p-10 sm:py-14 lg:p-14 md:items-center lg:items-start gap-10">
      <Image
        width={500}
        height={500}
        src={imageData.urls.full}
        alt={imageData.alt_description || ""}
        className="w-full sm:w-[600px] lg:w-1/2 rounded-md shadow-lg"
      />
      <div className="flex flex-col gap-5 w-full sm:w-[600px] lg:w-1/2 ">
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src={imageData.user.profile_image.large} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-azulEscuro text-sm">{imageData.user.name}</span>
        </div>
        <span className="text-cinzaEscuro font-normal text-xs">
          {imageData.created_at}
        </span>
        <div className="flex gap-2">
          <Button
            className={buttonStyle}
            onClick={() => setShowAddCollection(true)}
          >
            Add to collections
          </Button>
          <Button className={buttonStyle}>Download</Button>
        </div>

        {showAddCollection && (
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Add to Collection:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {collections.map((collection) => (
                <Button
                  key={collection.id}
                  className="bg-gray-200 hover:bg-gray-300 text-black"
                  onClick={() => addImageToCollection(collection.id)}
                >
                  {collection.title}
                </Button>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <h3 className="text-lg text-azulEscuro font-semibold">Coleções</h3>
          {imageCollections.length > 0 ? (
            imageCollections.map((collectionTitle, index) => (
              <span key={index} className="text-sm text-gray-600">
                {collectionTitle}
              </span>
            ))
          ) : (
            <p>No collections yet.</p>
          )}
        </div>

        {feedback && (
          <div className="mt-4 p-2 bg-gray-100 text-sm text-center text-red-500">
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
}
