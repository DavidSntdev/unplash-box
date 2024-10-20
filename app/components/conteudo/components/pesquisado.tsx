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
    <div className="flex flex-col place-self-start py-10 gap-5 w-full">
      <Input
        type="text"
        placeholder="Enter your keywords..."
        value={props.query}
        onChange={props.handleInputChange}
        className="py-6 bg-white w-[85%] md:w-[600px] mx-auto"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-5 sm:p-10">
        {props.imagens.length > 0 ? (
          props.imagens.map((img) => (
            <div
              key={img.id}
              className="relative w-full"
              style={{
                gridRowEnd: `span ${Math.ceil(img.height / img.width)}`,
              }}
            >
              <Image
                src={img.urls.small}
                alt={img.alt_description || ""}
                layout="responsive"
                width={img.width}
                height={img.height}
                className="rounded-md object-cover"
              />
            </div>
          ))
        ) : (
          <p>No images found</p>
        )}
      </div>
    </div>
  );
}
