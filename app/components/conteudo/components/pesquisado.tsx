import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouterPush } from "@/app/utils/functions/useRouterPush";

interface PesquisadoProps {
  query: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  imagens: UnsplashImage[];
}

export default function Pesquisado(props: PesquisadoProps) {
  const routerPush = useRouterPush();

  return (
    <div className="flex flex-col place-self-start py-10 gap-5 w-full">
      <div className="relative w-full md:w-[600px] mx-auto">
        <Input
          type="text"
          placeholder="Enter your keywords..."
          value={props.query}
          onChange={props.handleInputChange}
          className="py-6 bg-white w-[85%] md:w-[600px] pr-12"
        />
        <Image
          onClick={props.handleSearch}
          src="/icons/search.svg"
          alt="search"
          width={25}
          height={25}
          className="absolute right-3 top-3 cursor-pointer"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full p-5 sm:p-10">
        {props.imagens.length > 0 ? (
          props.imagens.map((img) => (
            <div
              key={img.id}
              className="relative w-full group"
              style={{
                gridRowEnd: `span ${Math.ceil(img.height / img.width)}`,
              }}
              onClick={() => routerPush("/image/", img.id)}
            >
              <Image
                src={img.urls.small}
                alt={img.alt_description || ""}
                layout="responsive"
                width={img.width}
                height={img.height}
                className="rounded-md object-cover cursor-pointer transition-transform duration-200 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
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
