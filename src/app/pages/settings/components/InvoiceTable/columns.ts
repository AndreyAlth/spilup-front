// Import Dependencies
import { createColumnHelper } from "@tanstack/react-table";

// Local Imports
import { Amount, Date, Download, InvoiceName, Status } from "./rows";

// ----------------------------------------------------------------------

const columnHelper = createColumnHelper();

// export const columns = [
//     columnHelper.accessor((row) => row.invoice_name, {
//         id: "invoice_name",
//         header: "Invoice Name",
//         cell: InvoiceName,
//     }),
//     columnHelper.accessor((row) => row.id, {
//         id: "id",
//         header: "#",
//     }),
//     columnHelper.accessor((row) => row.invoice_date, {
//         id: "invoice_date",
//         header: "invoice date",
//         filterFn: "inNumberRange",
//         cell: Date
//     }),
//     columnHelper.accessor((row) => row.due_date, {
//         id: "due_date",
//         header: "due date",
//         cell: Date
//     }),
//     columnHelper.accessor((row) => row.amount, {
//         id: "amount",
//         header: "amount",
//         cell: Amount,
//         filterFn: 'inNumberRange'
//     }),
//     columnHelper.accessor((row) => row.status, {
//         id: "status",
//         filterFn: 'arrIncludesSome',
//         header: "status",
//         cell: Status
//     }),
//     columnHelper.display({
//         id: 'download',
//         header: "Download",
//         cell: Download
//     })
// ]

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
  }),
  columnHelper.accessor((row) => row.metadata, {
    id: "metadata",
    header: "Metadata",
    cell: ({ getValue }) => JSON.stringify(getValue() || {}),
  }),
  columnHelper.display({
    id: "download",
    header: "Download",
    cell: Download,
  }),
];
