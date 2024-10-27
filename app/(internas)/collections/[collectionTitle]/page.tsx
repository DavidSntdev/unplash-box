import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import ConteudoCollectionDetail from "./conteudo";

export default function ImagePage({
  params,
}: {
  params: { collectionTitle: string };
}) {
  const { collectionTitle } = params;

  return (
    <div className="flex flex-col min-h-screen max-h-full max-w-7xl mx-auto justify-between">
      <div className="w-full">
        <Header />
        <ConteudoCollectionDetail collectionTitle={collectionTitle} />
      </div>
      <Footer />
    </div>
  );
}
