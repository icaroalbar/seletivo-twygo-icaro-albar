import { useFetch } from "./hooks/useFetch";
import Sidebar from "./partials/Sidebar";
import { useParams } from "react-router-dom";

export default function Course(): JSX.Element {
  const { data, error } = useFetch("courses");
  const { id } = useParams();

  console.log(id);

  if (error) return <div>Erro ao buscar dados.</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div className="flex justify-between h-screen">
      <div className="flex-grow">01</div>
      {/* <Sidebar courseId={id} /> */}
      <Sidebar />
    </div>
  );
}
