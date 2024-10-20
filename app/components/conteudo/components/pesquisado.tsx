import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface PesquisadoProps {
  query: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imagens: UnsplashImage[];
}

export default function Pesquisado(props: PesquisadoProps) {
  return (
    <div className="flex flex-col place-self-start py-10 gap-5 w-[85%] md:w-[600px]">
      <Input
        type="text"
        placeholder="Enter your keywords..."
        value={props.query}
        onChange={props.handleInputChange}
        className="py-6 bg-white"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {props.imagens.length > 0 ? (
          props.imagens.map((img) => (
            <div key={img.id} className="flex flex-col items-center">
              <Image
                width={300}
                height={300}
                src={img.urls.small}
                alt={img.alt_description || ""}
                className="w-full h-auto"
              />
              <p>{img.description || img.alt_description}</p>
            </div>
          ))
        ) : (
          <p>No images found</p>
        )}
      </div>
    </div>
  );
}
