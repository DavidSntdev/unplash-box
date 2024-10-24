import { buttonStyle } from "@/app/utils/constants/buttonImage";
import { ButtonInterface } from "@/app/utils/interfaces/button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ButtonWithIconProps extends ButtonInterface {
  icon: string;
}

export default function ButtonWithIcon(props: ButtonWithIconProps) {
  return (
    <Button className={`${buttonStyle} flex gap-2`} onClick={props.onClick}>
      <Image width={20} height={20} src={props.icon} alt={props.text} />
      <span>{props.text}</span>
    </Button>
  );
}
