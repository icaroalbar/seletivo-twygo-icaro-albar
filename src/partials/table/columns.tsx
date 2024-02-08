"use client";

import { formatDate } from "../../lib/utils";
import { Badge } from "../../components/ui/badge";
import { ColumnDef, Row } from "@tanstack/react-table";

export type Videos = {
  id: number;
  title: string;
  duration: string;
  status: "Não iniciado" | "concluída";
};

export type Courses = {
  id: 1;
  title: string;
  descricao: string;
  start_date: string;
  end_date: string;
  status: "Não iniciado" | "Em andamento" | "Concluída";
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
    cell: ({ row }: { row: Row<Courses> }) => {
      const status: string = row.original.status;
      return (
        <span>
          {status === "Não iniciado"
            ? "-"
            : formatDate(row.original.start_date)}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: { row: Row<Courses> }) => {
      const status = row.original.status;
      let variant: any = "default";

      if (status === "Não iniciado") variant = "destructive";
      if (status === "Em andamento") variant = "secondary";

      return <Badge variant={variant}>{status}</Badge>;
    },
  },
  {
    accessorKey: "end_date",
    header: "Data de conclusão",
    cell: ({ row }: { row: Row<Courses> }) => {
      const status: string = row.original.status;
      return (
        <span>
          {status === "Concluído" ? formatDate(row.original.end_date) : "-"}
        </span>
      );
    },
  },
];
