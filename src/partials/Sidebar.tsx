import Icon from "../components/icons";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { Separator } from "../components/ui/separator";
import { Checkbox } from "../components/ui/checkbox";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

export default function Sidebar() {
  const [hidden, setHidden] = useState<boolean>(false);
  const { data } = useFetch("courses");
  const { id } = useParams();

  const course = data.find((item: any) => item.id === id);

  return (
    <aside
      className={`z-50 flex flex-col bg-secondary drop-shadow transition-width duration-500 ease-in-out sm:translate-x-0 ${
        hidden ? "w-1/4 overflow-y-scroll" : "w-0"
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
        <div className={`flex justify-between items-center pb-2 container`}>
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
        <div className="py-2">
          {course &&
            course.videos.map((video: any) => (
              <div
                className="border-b dark:border-zinc-700 hover:bg-primary/10 cursor-pointer"
                key={video.id}
              >
                <div className="flex container gap-x-2 py-3 items-start">
                  <Checkbox className="mt-1.5" />
                  <div className="w-full">
                    <p>
                      {video.id}. {video.title}
                    </p>
                    <div className="flex gap-x-2 items-center justify-between mt-2">
                      <div key={video.id}>
                        <div className="flex gap-x-2 items-center">
                          <Icon
                            name="Video"
                            size={18}
                            className="text-muted-foreground"
                          />
                          <p className="text-xs text-muted-foreground">
                            {video.duration}
                          </p>
                        </div>
                      </div>
                      <Button size={"icon"} className="w-7 h-7">
                        <Icon name="Play" size={15} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </aside>
  );
}
