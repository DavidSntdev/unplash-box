import { buttonStyle } from "@/app/utils/constants/buttonImage";
import { UnsplashImage } from "@/app/utils/interfaces/unplashimage";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type HeaderImageProps = {
  imageData: UnsplashImage;
  setShowAddCollection: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HeaderImage(props: HeaderImageProps) {
  return (
    <>
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src={props.imageData.user.profile_image.large} />
        </Avatar>
        <span className="text-azulEscuro text-sm">
          {props.imageData.user.name}
        </span>
      </div>
      <span className="text-cinzaEscuro font-normal text-xs">
        {props.imageData.created_at}
      </span>
      <div className="flex gap-2">
        <Button
          className={buttonStyle}
          onClick={() => props.setShowAddCollection(true)}
        >
          Add to collections
        </Button>
        <Button className={buttonStyle}>Download</Button>
      </div>
    </>
  );
}
