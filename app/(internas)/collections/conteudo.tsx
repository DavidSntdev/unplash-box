import ConteudoLayout from "@/app/components/layouts/conteudoLayout";
import AdicionarCollection from "./components/adicionarCollection";
import CollectionsList from "./components/collectionsList";
import HeaderCollections from "./layouts/headerCollection";

export default function ConteudoCollection() {
  return (
    <ConteudoLayout className="py-10">
      <HeaderCollections
        text="Collections"
        description="Explore the world through collections of beautiful photos free to use under the Unsplash License."
      />
      <AdicionarCollection />
      <CollectionsList />
    </ConteudoLayout>
  );
}
