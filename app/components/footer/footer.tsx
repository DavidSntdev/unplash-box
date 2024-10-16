import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex items-center border-pretoTransparente justify-center py-3 border-t-[1px] bg-[#F3F4F6]">
      <Link
        rel="_blank"
        className="flex items-center gap-1 text-current"
        href="https://github.com/DavidSntdev"
        title="Github do desenvolvedor"
      >
        <span className="text-default-600">Desenvolvido por</span>
        <p className="text-blue-600">David Santos</p>
      </Link>
    </footer>
  );
}
