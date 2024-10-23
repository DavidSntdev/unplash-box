import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";
import { Button } from "@/components/ui/button";

type mostrarImagemProps = {
  showAddCollection: boolean;
  setShowAddCollection: (showAddCollection: boolean) => void;
  addImageToCollection: (collectionId: number) => void;
  collections: unplashCollection[];
};

export default function MostrarImagem(props: mostrarImagemProps) {
  return (
    props.showAddCollection && (
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">Add to Collection:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {props.collections.map((collection) => (
            <Button
              key={collection.id}
              className="bg-gray-200 hover:bg-gray-300 text-black"
              onClick={() => props.addImageToCollection(collection.id)}
            >
              {collection.title}
            </Button>
          ))}
        </div>
      </div>
    )
  );
}
