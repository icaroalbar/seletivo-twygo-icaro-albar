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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { Slider } from "./components/ui/slider";
import { Badge } from "./components/ui/badge";
import Icon from "./components/icons";
import { formatDate } from "./lib/utils";
import { Button } from "./components/ui/button";
import { AddCourse } from "./partials/AddCourse";

export default function App(): JSX.Element {
  const { data, error } = useFetch("courses");

  if (error) return <div>Erro ao buscar dados.</div>;
  if (!data) return <div>Carregando...</div>;

  const filteredData = data.filter((item: any) => item.status !== "Estoque");
  const filterNewCourse = data.filter((item: any) => item.status === "Estoque");

  return (
    <div className="py-10 space-y-5">
      <div className="flex justify-around mx-10 items-center">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight container">
          Meus cursos
        </h3>
        <Dialog>
          <DialogTrigger>
            <Button variant={"default"} className="space-x-2">
              <Icon name="Plus" size={18} />
              <span>Adiocionar curso</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              {filterNewCourse.map((item: any) => (
                <Alert
                  className="border-none flex items-start gap-x-4"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt="Imagem curso"
                    width={90}
                    className="mt-1"
                  />
                  <div>
                    <DialogTitle>
                      <AlertTitle>{item.title}</AlertTitle>
                    </DialogTitle>
                    <DialogDescription>
                      <AlertDescription>{item.description}</AlertDescription>
                    </DialogDescription>
                    <AddCourse courseId={item.id} />
                  </div>
                </Alert>
              ))}
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-4 gap-3 justify-between container">
        {filteredData.map((item: any) => (
          <Card
            className="border-none rounded-none col-span-4 md:col-span-2 lg:col-span-1 dark:bg-secondary bg-white"
            key={item.id}
          >
            <CardHeader className="p-0">
              <Link
                to={`/course/${item.id}`}
                className="bg-cover w-full min-h-32 text-transparent hover:text-white flex justify-center items-center transition-colors"
                style={{
                  backgroundImage: `url('${item.image}')`,
                }}
              >
                <div className="hover:bg-zinc-700/60 w-full flex justify-center items-center min-h-32">
                  <Icon name="PlayCircle" size={60} className="opacity-80" />
                </div>
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
