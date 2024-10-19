import Conteudo from "@/app/components/conteudo/conteudo";
import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";

export default function Collections() {
  return (
    <div className="relative flex flex-col h-screen justify-between">
      <Header />
      <Conteudo />
      <Footer />
    </div>
  );
}
