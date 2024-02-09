import { useFetch } from "./hooks/useFetch";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Slider } from "./components/ui/slider";
import { Badge } from "./components/ui/badge";
import Icon from "./components/icons";
import { formatDate } from "./lib/utils";

export default function App(): JSX.Element {
  const { data, error } = useFetch("courses");

  if (error) return <div>Erro ao buscar dados.</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div className="py-10 space-y-5">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight container">
        Meus cursos
      </h3>
      <div className="grid grid-cols-4 gap-3 justify-between container">
        {data.map((item: any) => (
          <Card
            className="border-none rounded-none col-span-4 md:col-span-2 lg:col-span-1 dark:bg-secondary bg-white"
            key={item.id}
          >
            <CardHeader className="p-0">
              <Link
                to={"/"}
                className={`bg-cover w-full min-h-32`}
                style={{
                  backgroundImage: `url('${item.image}')`,
                }}
              >
                <Link
                  to={`/course/${item.id}`}
                  className="text-transparent hover:text-white flex justify-center items-center transition-colors hover:bg-zinc-700/50 w-full min-h-32"
                >
                  <Icon name="PlayCircle" size={60} className="opacity-80" />
                </Link>
              </Link>
              <div className="p-5">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.category}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Slider defaultValue={[1]} max={100} step={1} />
              <CardDescription className="mt-2">2% Concluído</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="space-y-2">
                <p className="text-xs">Data de início</p>
                <CardDescription>{formatDate(item.start_date)}</CardDescription>
              </div>
              <div className="space-y-2">
                <p className="text-xs">Status</p>
                <Badge variant={"default"}>{item.status}</Badge>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
