import { Input } from "@/components/ui/input";
import Image from "next/image";

type HeaderPesquisaProps = {
  query: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
};

export default function HeaderPesquisa(props: HeaderPesquisaProps) {
  return (
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
  );
}
