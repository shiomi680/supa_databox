import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
type ColumnsDef = {
  field: string;
  headerName: string;
  link?: (formData: any) => string;
};

type TablePartProps = {
  modeLink: boolean;
  items: any[];
  idName: string;
  gridColumnsDef: ColumnsDef[];
  onSelect?: (itemId: number) => void;
};

export const ItemSelectorPanel: React.FC<TablePartProps> = ({
  modeLink,
  items,
  idName,
  gridColumnsDef,
  onSelect,
}) => {
  const columns: ColumnDef<any>[] = React.useMemo(
    () =>
      gridColumnsDef.map((columnDef) => ({
        accessorKey: columnDef.field,
        header: columnDef.headerName,
        cell: ({ row }) => {
          const cellValue: any = row.getValue(columnDef.field);
          return columnDef.link && modeLink ? (
            <Link href={columnDef.link(row.original)}>{cellValue}</Link>
          ) : (
            cellValue
          );
        },
      })),
    [gridColumnsDef, modeLink]
  );

  const table = useReactTable({
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            onClick={() => onSelect && onSelect(row.original[idName])}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
