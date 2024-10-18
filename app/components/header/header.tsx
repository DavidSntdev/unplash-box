import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="w-full max-w-7xl mx-auto flex justify-between p-5">
      <div>UnplashBox</div>
      <div className="flex gap-5">
        <Button>Home</Button>
        <Button>Collections</Button>
      </div>
    </div>
  );
}
