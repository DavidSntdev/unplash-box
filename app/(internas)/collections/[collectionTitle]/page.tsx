import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import ImagesCollection from "./images";

export default function ImagePage({
  params,
}: {
  params: { collectionTitle: string };
}) {
  const { collectionTitle } = params;

  return (
    <div className="flex flex-col min-h-screen max-h-full max-w-7xl mx-auto justify-between">
      <div>
        <Header />
        <ImagesCollection collectionTitle={collectionTitle} />
      </div>
      <Footer />
    </div>
  );
}
