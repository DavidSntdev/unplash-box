"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";

export default function ConteudoCollection() {
  const [collections, setCollections] = useState<unplashCollection[]>([]);

  const fetchCollections = async () => {
    try {
      const response = await axios.get("https://api.unsplash.com/collections", {
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
        },
      });

      const colecoesDesejadas = [
        "ghouls & ghosts",
        "in a flash",
        "halloween",
        "food basics by maryam sicard",
        "fall wallpapers",
        "cyber spikes",
      ];

      const colecoesFiltradas = response.data.filter(
        (collection: unplashCollection) =>
          colecoesDesejadas.includes(collection.title.toLowerCase())
      );

      setCollections(colecoesFiltradas);
    } catch (error) {
      console.error("Erro ao buscar coleções:", error);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <div className="max-w-7xl flex flex-col h-full mx-auto py-10">
      <div className="flex flex-col gap-3 mx-auto px-20">
        <h1 className="text-center text-4xl">Collection</h1>
        <p className="text-center">
          Explore the world through collections of beautiful photos free to use
          under the Unsplash License.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-10 py-10 px-20">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="flex flex-col gap-1 justify-between"
          >
            {collection.preview_photos.length > 0 && (
              <Image
                src={collection.preview_photos[0].urls.regular}
                alt={collection.title}
                className="w-full h-auto object-cover"
                width={300}
                height={300}
                unoptimized={true}
              />
            )}
            <div className="flex flex-col">
              <span className="text-lg font-bold">{collection.title}</span>
              <span className="text-sm">{collection.total_photos} Photos</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
