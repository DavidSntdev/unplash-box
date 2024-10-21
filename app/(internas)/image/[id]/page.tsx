"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import Image from "next/image";

export default function ImagePage({ params }: { params: { id: string } }) {
  const [imageData, setImageData] = useState<UnsplashImage | null>(null);
  const { id } = params;

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
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-5">
        {imageData.alt_description || "Sem descrição"}
      </h1>
      <Image
        width={500}
        height={500}
        src={imageData.urls.full}
        alt={imageData.alt_description || ""}
        className="w-full max-w-4xl rounded-lg shadow-lg"
      />
      <p className="mt-5 text-gray-600">Fotógrafo: {imageData.user.name}</p>
      <a
        href={imageData.links.html}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 text-blue-600"
      >
        Ver no Unsplash
      </a>
    </div>
  );
}
