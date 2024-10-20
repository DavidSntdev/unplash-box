export default function getBgStyle(pesquisa: boolean) {
  return pesquisa
    ? "bg-[url('/images/gradiend-bg.svg')] bg-auto bg-no-repeat bg-top"
    : "bg-[url('/images/hero-image.png')] bg-auto lg:bg-contain bg-no-repeat bg-center";
}
