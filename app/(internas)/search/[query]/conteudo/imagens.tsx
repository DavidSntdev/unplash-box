import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import Image from "next/image";

interface ImagensPesquisaProps {
  imagens: UnsplashImage[];
  routerPush: (route: string, id: string) => void;
}

export default function ImagensPesquisa(props: ImagensPesquisaProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full p-5 sm:p-10">
      {props.imagens.length > 0 ? (
        props.imagens.map((img) => (
          <div
            key={img.id}
            className="relative w-full group"
            style={{
              gridRowEnd: `span ${Math.ceil(img.height / img.width)}`,
            }}
            onClick={() => props.routerPush("/image/", img.id)}
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
  );
}
