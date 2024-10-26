import { useCallback } from "react";
import { useRouter } from "next/navigation";

export const useRouterPush = () => {
  const router = useRouter();

  const routerPush = useCallback(
    (link: string, props: string | number) => {
      router.push(`${link + props}`);
    },
    [router]
  );

  return routerPush;
};
