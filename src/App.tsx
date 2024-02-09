import { useFetch } from "./hooks/useFetch";
import { format } from "date-fns";
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

export default function App(): JSX.Element {
  const { data, error } = useFetch("courses");

  if (error) return <div>Erro ao buscar dados.</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Lista de Cursos</h1>
      <Card className="border-none rounded-none max-w-xs">
        <CardHeader className="p-0">
          <Link
            to={"/"}
            className="bg-cover w-full min-h-32 bg-[url('https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg')]"
            style={{
              backgroundImage: `url('https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg')`,
            }}
          >
            <div className="text-transparent hover:text-white flex justify-center items-center transition-colors hover:bg-zinc-700/50 w-full min-h-32">
              <Icon name="PlayCircle" size={60} className="opacity-80" />
            </div>
          </Link>
          <div className="p-5">
            <CardTitle>Nome do curso</CardTitle>
            <CardDescription>Instrutor</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Slider defaultValue={[1]} max={100} step={1} />
          <CardDescription className="mt-2">2% Concluído</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div>
            <p className="text-xs">Data de início</p>
            <CardDescription>09/02/2024</CardDescription>
          </div>
          <div>
            <p className="text-xs">Status</p>
            <Badge variant={"default"}>Não iniciado</Badge>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
