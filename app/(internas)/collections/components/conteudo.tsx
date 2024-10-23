// src/app/conteudoCollection.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ConteudoLayout from "@/app/components/layouts/conteudoLayout";
import { textCollection } from "@/app/utils/constants/textCollection";
import { useImageCollection } from "@/app/context/collectionContext";

export default function ConteudoCollection() {
  const { collections, addCollection } = useImageCollection();
  const [newCollectionTitle, setNewCollectionTitle] = useState<string>("");

  const handleAddCollection = () => {
    if (newCollectionTitle.trim()) {
      addCollection(newCollectionTitle);
      setNewCollectionTitle("");
    }
  };

  return (
    <ConteudoLayout className="py-10">
      <div className="flex flex-col gap-3 mx-auto px-20">
        <h1
          className={`text-center text-4xl font-semibold py-2 px-4 rounded-md ${textCollection}`}
          style={{ backgroundSize: "20% 20%" }}
        >
          Collections
        </h1>

        <p className="text-center">
          Explore these collections of beautiful images.
        </p>
      </div>

      <div className="my-6 max-w-xl mx-auto flex justify-center gap-4">
        <Input
          type="text"
          placeholder="Enter new collection title"
          value={newCollectionTitle}
          onChange={(e) => setNewCollectionTitle(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        <Button
          onClick={handleAddCollection}
          className="bg-blue-500 hover:bg-blue-500/70 text-white px-4 py-2 rounded-md"
        >
          Add Collection
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-10 py-10 px-20">
        {collections.map((collection) => (
          <div key={collection.id} className="flex flex-col gap-1">
            <h2 className="text-lg font-bold cursor-pointer">
              {collection.title}
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {collection.images.length > 0 ? (
                collection.images.map((imageUrl, index) => (
                  <Image
                    key={index}
                    src={imageUrl}
                    alt={`Image in ${collection.title}`}
                    className="w-full h-auto object-cover"
                    width={300}
                    height={300}
                    unoptimized={true}
                  />
                ))
              ) : (
                <p>No images added yet</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </ConteudoLayout>
  );
}
