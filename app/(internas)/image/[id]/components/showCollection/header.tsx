import { buttonStyle } from "@/app/utils/constants/buttonImage";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type props = {
  setShowAddCollection: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HeaderSAC({ setShowAddCollection }: props) {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-2xl text-azulEscuro font-semibold">
        Add to Collections
      </h1>
      <Button
        className={`${buttonStyle} rounded-xl p-3`}
        onClick={() => setShowAddCollection(false)}
      >
        <Image src="/icons/Close.svg" alt="close" width={20} height={20} />
      </Button>
    </div>
  );
}
