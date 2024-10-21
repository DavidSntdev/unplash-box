"use client";
import { getButtonStyle } from "@/app/utils/functions/getButtonStyle";
import { links } from "@/app/utils/constants/links";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const currentPath = usePathname();

  return (
    <div className="w-full border-b-[1px]">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <Image src="/icons/logo.svg" width={150} height={30} alt="logo" />
        <div className="flex gap-5">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} passHref>
              <Button
                className={`${getButtonStyle(
                  href,
                  currentPath
                )} hover:bg-cinzaEscuro/30`}
                aria-current={currentPath === href ? "page" : undefined}
              >
                {label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
