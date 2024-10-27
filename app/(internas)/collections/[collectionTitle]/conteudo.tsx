import HeaderCollections from "../layouts/headerCollection";
import ImagesCollection from "./images";

export default function ConteudoCollectionDetail({
  collectionTitle,
}: {
  collectionTitle: string;
}) {
  return (
    <div className="flex flex-col gap-10 w-full">
      <HeaderCollections
        text="Collections"
        description="Explore the world through collections of beautiful photos free to use under the Unsplash License."
      />
      <ImagesCollection collectionTitle={collectionTitle} />
    </div>
  );
}
