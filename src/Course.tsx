import { useFetch } from "./hooks/useFetch";
import Sidebar from "./partials/Sidebar";

export default function Course(): JSX.Element {
  const { data, error } = useFetch("courses");

  if (error) return <div>Erro ao buscar dados.</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div className="flex justify-between">
      <div className="flex-grow">01</div>
      <Sidebar />
    </div>
  );
}
