import { Input } from "@/components/ui/input";
import Image from "next/image";

interface NaoPesquisadoProps {
  query: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}

export default function NaoPesquisado(props: NaoPesquisadoProps) {
  return (
    <div className="flex flex-col items-center w-[500px] gap-5 mb-32">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-4xl font-bold text-azulEscuro">Search</h1>
        <p className="text-azulEscuro">
          Search high-resolution images from Unsplash
        </p>
      </div>
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="Enter your keywords..."
          value={props.query}
          onChange={props.handleInputChange}
          className="h-12 pr-12"
        />
        <Image
          onClick={props.handleSearch}
          width={25}
          height={25}
          src="/icons/search.svg"
          alt="search"
          className="absolute right-2 top-3  cursor-pointer"
        />
      </div>
    </div>
  );
}
