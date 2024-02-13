import Icon from "../components/icons";
import { Button } from "../components/ui/button";
import axios from "axios";
import { useState } from "react";

export function AddCourse({ courseId }: { courseId: string }): JSX.Element {
  const [disable, setDisable] = useState<boolean>(false);

  const handleStatusUpdate = async () => {
    setDisable(true);
    try {
      // Faz uma requisição GET para obter os detalhes do curso específico
      const response = await axios.get(
        `http://localhost:4000/courses/${courseId}`,
      );
      const course = response.data;

      // Atualiza o status do curso para "Não Iniciado"
      const updatedCourse = { ...course, status: "Não Iniciado" };

      // Faz uma requisição PUT para atualizar os detalhes do curso
      await axios.put(
        `http://localhost:4000/courses/${courseId}`,
        updatedCourse,
      );

      console.log("Status atualizado com sucesso.");
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    } finally {
      setDisable(false);
    }
  };

  return (
    <Button
      variant={"default"}
      className="space-x-2 mt-3"
      onClick={handleStatusUpdate}
      disabled={disable}
    >
      {disable ? (
        <>
          <Icon name="Loader2" className="animate-spin" size={18} />
          <span className="ml-2">Aguarde...</span>
        </>
      ) : (
        <>
          <Icon name="Plus" size={18} />
          <span>Adicionar</span>
        </>
      )}
    </Button>
  );
}
