import { useImageCollection } from "@/app/context/collectionContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function AdicionarCollection() {
  const { addCollection } = useImageCollection();
  const [newCollectionTitle, setNewCollectionTitle] = useState<string>("");

  const handleAddCollection = () => {
    if (newCollectionTitle.trim()) {
      addCollection(newCollectionTitle);
      setNewCollectionTitle("");
    }
  };

  return (
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
  );
}
