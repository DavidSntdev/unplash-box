"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";

interface CollectionContextType {
  collections: unplashCollection[];
  addCollection: (title: string) => void;
  addImageToCollection: (collectionId: number, imageUrl: string) => void;
  removeImageFromCollection: (collectionId: number, imageUrl: string) => void; // Nova função
}

const ImageCollectionContext = createContext<CollectionContextType | undefined>(
  undefined
);

export const CollectionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [collections, setCollections] = useState<unplashCollection[]>([]);

  useEffect(() => {
    const storedCollections = localStorage.getItem("imageCollections");
    if (storedCollections) {
      setCollections(JSON.parse(storedCollections));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("imageCollections", JSON.stringify(collections));
  }, [collections]);

  const addCollection = (title: string) => {
    const newCollection: unplashCollection = {
      id: collections.length ? collections[collections.length - 1].id + 1 : 1,
      title,
      images: [],
    };
    setCollections((prev) => [...prev, newCollection]);
  };

  const addImageToCollection = (collectionId: number, imageUrl: string) => {
    setCollections((prev) =>
      prev.map((collection) => {
        if (collection.id === collectionId) {
          return { ...collection, images: [...collection.images, imageUrl] };
        }
        return collection;
      })
    );
  };

  const removeImageFromCollection = (
    collectionId: number,
    imageUrl: string
  ) => {
    setCollections((prev) =>
      prev.map((collection) => {
        if (collection.id === collectionId) {
          return {
            ...collection,
            images: collection.images.filter((img) => img !== imageUrl),
          };
        }
        return collection;
      })
    );
  };

  return (
    <ImageCollectionContext.Provider
      value={{
        collections,
        addCollection,
        addImageToCollection,
        removeImageFromCollection,
      }} // Adiciona a nova função aqui
    >
      {children}
    </ImageCollectionContext.Provider>
  );
};

export const useImageCollection = () => {
  const context = useContext(ImageCollectionContext);
  if (!context) {
    throw new Error(
      "useImageCollection must be used within an ImageCollectionProvider"
    );
  }
  return context;
};
