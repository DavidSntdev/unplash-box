"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";
import { UnsplashImage } from "../utils/interfaces/unplashimage";

interface CollectionContextType {
  collections: unplashCollection[];
  addCollection: (title: string) => { error?: string };
  addImageToCollection: (collectionId: number, image: UnsplashImage) => void;
  removeImageFromCollection: (
    collectionId: number,
    imageId: UnsplashImage
  ) => void;
}

const ImageCollectionContext = createContext<CollectionContextType | undefined>(
  undefined
);

export const CollectionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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
    const normalizedTitle = title.trim().toLowerCase();
    const titleExists = collections.some(
      (collection) => collection.title.toLowerCase() === normalizedTitle
    );

    if (titleExists) {
      return { error: "A collection with this title already exists." };
    }

    const newCollection: unplashCollection = {
      id: collections.length ? collections[collections.length - 1].id + 1 : 1,
      title: title.charAt(0).toUpperCase() + title.slice(1).toLowerCase(),
      images: [],
    };

    setCollections((prev) => [...prev, newCollection]);
    return {};
  };

  const addImageToCollection = (collectionId: number, image: UnsplashImage) => {
    setCollections((prev) =>
      prev.map((collection) => {
        if (collection.id === collectionId) {
          return { ...collection, images: [...collection.images, image] };
        }
        return collection;
      })
    );
  };

  const removeImageFromCollection = (
    collectionId: number,
    imageId: UnsplashImage
  ) => {
    setCollections((prev) =>
      prev.map((collection) => {
        if (collection.id === collectionId) {
          return {
            ...collection,
            images: collection.images.filter(
              (img) => img.id !== imageId.toString()
            ),
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
      }}
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
