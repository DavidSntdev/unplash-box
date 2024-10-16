import Conteudo from "./components/conteudo/conteudo";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="relative flex flex-col h-screen bg-[#F3F4F6]">
      <Conteudo />
      <Footer />
    </div>
  );
}
