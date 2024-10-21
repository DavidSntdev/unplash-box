import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import ConteudoCollection from "./components/conteudo";

export default function Collections() {
  return (
    <div className="flex flex-col min-h-screen max-h-full justify-between">
      <div>
        <Header />
        <ConteudoCollection />
      </div>
      <Footer />
    </div>
  );
}
