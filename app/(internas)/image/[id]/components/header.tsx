import ButtonWithIcon from "@/app/components/common/buttonWithIcon";
import { formatarData } from "@/app/utils/functions/getFormattedData";
import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

type HeaderImageProps = {
  imageData: UnsplashImage;
  setShowAddCollection: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HeaderImage(props: HeaderImageProps) {
  const criadorImagem = props.imageData.user.profile_image.large;
  const criadorNome = props.imageData.user.name;
  const dataCriacao = props.imageData.created_at;

  return (
    <>
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src={criadorImagem} />
        </Avatar>
        <span className="text-azulEscuro text-sm">{criadorNome}</span>
      </div>
      <span className="text-cinzaEscuro font-normal text-xs">
        Published on {formatarData(dataCriacao)}
      </span>
      <div className="flex gap-2">
        <ButtonWithIcon
          icon="/icons/Plus.svg"
          text="Add to collection"
          onClick={() => props.setShowAddCollection(true)}
        />
        <ButtonWithIcon
          icon="/icons/download.svg"
          text="Download"
          onClick={() => {}}
        />
      </div>
    </>
  );
}
