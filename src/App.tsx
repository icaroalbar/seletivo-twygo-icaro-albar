import Icon from "./components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { useFetch } from "./hooks/useFetch";
import { columns } from "./partials/table/columns";
import { DataTable } from "./partials/table/data-table";

export function App(): JSX.Element {
  const { data, error } = useFetch("courses");

  if (error) return <div>Erro ao buscar dados.</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Lista de Cursos</h1>
      {/* <Accordion type="single" collapsible className="container">
        {data.map((curso: any) => (
          <AccordionItem key={curso.id} value={curso.id} className="container">
            <AccordionTrigger>
              <div>{curso.titulo}</div>
              <div>{curso.data_inicio}</div>
              <div>{curso.data_termino}</div>
            </AccordionTrigger>
            {curso.videos.map((video: any) => (
              <AccordionContent key={video.id} className="flex justify-around">
                {video.titulo}{" "}
                <Icon
                  name={"PlayCircle"}
                  className="hover:opacity-80 text-primary"
                />
              </AccordionContent>
            ))}
          </AccordionItem>
        ))}
      </Accordion> */}
      <DataTable columns={columns} data={data} />
    </div>
  );
}
