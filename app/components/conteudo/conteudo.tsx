import { Input } from "@/components/ui/input";
import ConteudoLayout from "../layouts/conteudoLayout";

export default function Conteudo() {
  return (
    <ConteudoLayout className="bg-[url('/images/hero-image.png')] bg-contain bg-no-repeat bg-center flex items-center justify-center">
      <div className="flex flex-col items-center w-[500px] gap-5 mb-32">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl font-bold text-azulEscuro">Search</h1>
          <p className="text-azulEscuro">
            Search high-resolution images from Unsplash
          </p>
        </div>
        <Input
          type="text"
          placeholder="Enter your keywords..."
          className="py-6"
        />
      </div>
    </ConteudoLayout>
  );
}
