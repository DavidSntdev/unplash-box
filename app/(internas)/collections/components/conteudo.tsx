"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ConteudoLayout from "@/app/components/layouts/conteudoLayout";
import { textCollection } from "@/app/utils/constants/textCollection";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";

export default function ConteudoCollection() {
  const [collections, setCollections] = useState<unplashCollection[]>([]);
  const [newCollectionTitle, setNewCollectionTitle] = useState<string>("");
  const [expandedCollectionId, setExpandedCollectionId] = useState<
    number | null
  >(null);

  const fetchCollections = async () => {
    try {
      const response = await fetch("/api/collections", {
        method: "GET",
      });
      const data = await response.json();
      setCollections(data);
    } catch (error) {
      console.error("Erro ao buscar coleções", error);
    }
  };

  const addCollection = async () => {
    if (newCollectionTitle.trim() === "") return;

    try {
      const response = await fetch("/api/collections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newCollectionTitle }),
      });

      if (response.ok) {
        const newCollection = await response.json();
        setCollections((prevCollections) => [
          ...prevCollections,
          newCollection,
        ]);
        setNewCollectionTitle("");
      }
    } catch (error) {
      console.error("Erro ao adicionar coleção", error);
    }
  };

  const toggleCollection = (id: number) => {
    setExpandedCollectionId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    fetchCollections();
  }, []);

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
          onClick={addCollection}
          className="bg-blue-500 hover:bg-blue-500/70 text-white px-4 py-2 rounded-md"
        >
          Add Collection
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-10 py-10 px-20">
        {collections.map((collection) => (
          <div key={collection.id} className="flex flex-col gap-1">
            <h2
              className="text-lg font-bold cursor-pointer"
              onClick={() => toggleCollection(collection.id)}
            >
              {collection.title}
            </h2>
            {expandedCollectionId === collection.id && (
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
            )}
          </div>
        ))}
      </div>
    </ConteudoLayout>
  );
}
