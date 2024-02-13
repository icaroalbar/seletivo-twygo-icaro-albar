import Icon from "./components/icons";
import { Button } from "./components/ui/button";
import { Card, CardTitle, CardDescription } from "./components/ui/card";
import { Video } from "./components/video";
import { useFetch } from "./hooks/useFetch";
import Sidebar from "./partials/Sidebar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Course(): JSX.Element {
  const { data, error } = useFetch("courses");
  const { id } = useParams();

  const course = data.find((item: any) => item.id === id);

  if (error) return <div>Erro ao buscar dados.</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div className="flex justify-between h-screen">
      <div className="flex-grow container">
        <Button variant={"link"} className="my-5">
          <Link
            to={"/"}
            className="text-zinc-700 dark:text-white capitalize  items-center gap-x-1 flex"
          >
            <Icon name="ArrowLeft" size={18} />
            voltar
          </Link>
        </Button>
        <h3 className="scroll-m-20 mb-5 text-2xl font-semibold tracking-tight">
          {course.title}
        </h3>
        <Video id="OyTN-MF-OEg" />
        <Card className="dark:bg-secondary bg-white p-8">
          <CardTitle className="mb-3">Descrição</CardTitle>
          <CardDescription>{course.description}</CardDescription>
        </Card>
      </div>
      <Sidebar />
    </div>
  );
}
