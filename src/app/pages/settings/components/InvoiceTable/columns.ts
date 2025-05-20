// Import Dependencies
import { createColumnHelper } from "@tanstack/react-table";

// Local Imports
import { Amount, Date, Download, InvoiceName, Status } from "./rows";

// ----------------------------------------------------------------------

const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor((row) => row.id, {
    id: "id",
    header: "Transaction ID",
  }),
  columnHelper.accessor((row) => row.createdAt, {
    id: "createdAt",
    header: "Created At",
    cell: Date,
  }),
  // columnHelper.accessor((row) => row.updatedAt, {
  //     id: "updatedAt",
  //     header: "Updated At",
  //     cell: ({ getValue }) => new Date(getValue()).toLocaleDateString(),
  // }),
  columnHelper.accessor((row) => row.amount, {
    id: "amount",
    header: "Amount",
    cell: ({ getValue }) => `${getValue()} tokens`,
  }),
  columnHelper.accessor((row) => row.type, {
    id: "type",
    header: "Type",
    cell: Status,
  }),
  columnHelper.accessor((row) => row.description, {
    id: "description",
    header: "Description",
    cell: ({ getValue }) => getValue() || "No Description",
  })
];
