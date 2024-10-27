import { Input } from "@/components/ui/input";

type props = {
  pesquisa: string;
  setPesquisa: (value: string) => void;
};

export default function SearchSAC(props: props) {
  return (
    <Input
      value={props.pesquisa}
      placeholder="Search"
      className="w-full h-14"
      onChange={(e) => props.setPesquisa(e.target.value)}
    />
  );
}
