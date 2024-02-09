import Icon from "../components/icons";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { Separator } from "../components/ui/separator";

export default function Sidebar() {
  const [hidden, setHidden] = useState<boolean>(false);

  return (
    <aside
      className={`z-50 flex h-[91.4vh] flex-col bg-secondary drop-shadow transition-width duration-500 ease-in-out sm:translate-x-0 ${
        hidden ? "w-1/4" : "w-0"
      }`}
      aria-label="Sidebar"
    >
      <Button
        variant={"ghost"}
        className={`relative right-10 top-9 ${hidden && "hidden"}`}
        size={"icon"}
        onClick={() => setHidden(true)}
      >
        <Icon name="ArrowLeftCircle" />
      </Button>
      <div className={`py-3 ${hidden === false && "hidden"}`}>
        <div className={`flex justify-around items-center pb-2 container`}>
          <p>Conteúdo do curso</p>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => setHidden(false)}
          >
            <Icon name="X" />
          </Button>
        </div>
        <Separator />
        <div></div>
      </div>
    </aside>
  );
}
