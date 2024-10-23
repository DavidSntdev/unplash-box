export default function ImageCollections(props: {
  imageCollections: string[];
}) {
  return (
    props.imageCollections.length > 0 && (
      <div className="flex flex-col gap-2">
        <h3 className="text-lg text-azulEscuro font-semibold">Coleções</h3>
        {props.imageCollections.map((collectionTitle, index) => (
          <span key={index} className="text-sm text-gray-600">
            {collectionTitle}
          </span>
        ))}
      </div>
    )
  );
}
