import { textCollection } from "@/app/utils/constants/textCollection";

interface props {
  text: string;
  description: string;
  className?: string;
}

export default function HeaderCollections(props: props) {
  return (
    <div className={`flex flex-col mx-auto w-full ${props.className}`}>
      <h1
        className={`text-center text-4xl font-semibold max-w-[300px] mx-auto py-2 px-4 rounded-md ${textCollection} `}
        style={{ backgroundSize: "100% 100%" }}
      >
        {props.text}
      </h1>
      <p className="text-center max-w-md mx-auto">{props.description}</p>
    </div>
  );
}
