import ConteudoLayout from "@/app/components/layouts/conteudoLayout";
import HeaderCollections from "./components/header";
import AdicionarCollection from "./components/adicionarCollection";
import CollectionsList from "./components/collectionsList";

export default function ConteudoCollection() {
  // COMPONENTIZAR TUDO POSSIVEL
  return (
    <ConteudoLayout className="py-10">
      <HeaderCollections />
      <AdicionarCollection />
      <CollectionsList />
    </ConteudoLayout>
  );
}
