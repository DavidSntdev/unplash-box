import Image from "next/image";
import { useImageCollection } from "@/app/context/collectionContext";

export default function CollectionsList() {
  const { collections } = useImageCollection();

  return (
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
  );
}
