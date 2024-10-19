import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full border-b-[1px]">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <Image src="/icons/logo.svg" width={150} height={30} alt="logo" />
        <div className="flex gap-5">
          <Button className="bg-cinza text-cinzaEscuro hover:bg-cinzaEscuro/30">
            Home
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-cinzaEscuro/30 text-cinzaEscuro hover:text-cinzaEscuro"
          >
            Collections
          </Button>
        </div>
      </div>
    </div>
  );
}
