"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Videos = {
  id: number;
  title: string;
  duration: string;
  status: "Não iniciado" | "concluída";
};

export type Courses = {
  id: 1;
  title: "Introdução à Programação";
  descricao: "Um curso introdutório para iniciantes em programação";
  start_date: "2024-03-15";
  end_date: "2024-05-15";
  status: "Não iniciado" | "em andamento" | "concluída";
  videos: Videos[];
};

export const columns: ColumnDef<Courses>[] = [
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    accessorKey: "start_date",
    header: "Data de início",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "end_date",
    header: "Data de conclusão",
  },
];
