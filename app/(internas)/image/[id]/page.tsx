import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import ConteudoImage from "./components/conteudo";

export default function ImagePage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="flex flex-col min-h-screen max-h-full justify-between">
      <div>
        <Header />
        <ConteudoImage id={id} />
      </div>
      <Footer />
    </div>
  );
}
