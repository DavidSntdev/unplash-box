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
      <Input
        type="text"
        placeholder="Enter your keywords..."
        value={props.query}
        onChange={props.handleInputChange}
        className="py-6"
      />
      <button
        onClick={props.handleSearch}
        className="px-6 py-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
    </div>
  );
}
