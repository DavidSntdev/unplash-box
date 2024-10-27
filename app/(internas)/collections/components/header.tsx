import { textCollection } from "@/app/utils/constants/textCollection";

export default function HeaderCollections() {
  return (
    <div className="flex flex-col gap-3 mx-auto px-20">
      <h1
        className={`text-center text-4xl font-semibold py-2 px-4 rounded-md ${textCollection}`}
        style={{ backgroundSize: "20% 20%" }}
      >
        Collections
      </h1>

      <p className="text-center">
        Explore the world through collections of beautiful photos free to use
        under the Unsplash License.
      </p>
    </div>
  );
}
