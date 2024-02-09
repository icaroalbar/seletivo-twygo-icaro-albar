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

export default function Course(): JSX.Element {
  const { data, error } = useFetch("courses");

  if (error) return <div>Erro ao buscar dados.</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    
  );
}
