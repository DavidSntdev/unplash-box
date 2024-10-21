"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { buttonStyle } from "@/app/utils/constants/buttonImage";

interface ConteudoImageProps {
  id: string;
}

export default function ConteudoImage({ id }: ConteudoImageProps) {
  const [imageData, setImageData] = useState<UnsplashImage | null>(null);

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
          <Button className={buttonStyle}>Add to collection</Button>
          <Button className={buttonStyle}>Download</Button>
        </div>
      </div>
    </div>
  );
}
