import Icon from "../components/icons";
import { Button } from "../components/ui/button";
import axios from "axios";
import { useState } from "react";

export function AddCourse({ courseId }: { courseId: string }): JSX.Element {
  const [disable, setDisable] = useState<boolean>(false);

  const handleStatusUpdate = async () => {
    setDisable(true);
    try {
      const response = await axios.get(
        `http://localhost:4000/courses/${courseId}`,
      );
      const course = response.data;

      const updatedCourse = { ...course, status: "Não Iniciado" };

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
