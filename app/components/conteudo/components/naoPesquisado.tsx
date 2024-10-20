import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
      <div className="flex gap-2 h-full w-full">
        <Input
          type="text"
          placeholder="Enter your keywords..."
          value={props.query}
          onChange={props.handleInputChange}
          className="h-12"
        />
        <Button
          onClick={props.handleSearch}
          className="bg-blue-500 hover:bg-blue-500/70 h-12 text-white rounded"
        >
          Search
        </Button>
      </div>
    </div>
  );
}
