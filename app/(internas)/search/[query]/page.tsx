import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import ConteudoPesquisa from "./conteudo";

export default function PesquisaPage({
  params,
}: {
  params: { query: string };
}) {
  return (
    <div className="relative flex flex-col h-screen justify-between">
      <Header />
      <ConteudoPesquisa query={params.query} />
      <Footer />
    </div>
  );
}
