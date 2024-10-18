import Conteudo from "./components/conteudo/conteudo";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

export default function Home() {
  return (
    <div className="relative flex flex-col h-screen justify-between">
      <Header />
      <Conteudo />
      <Footer />
    </div>
  );
}
