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
      <DataTable columns={columns} data={data} />
    </div>
  );
}
