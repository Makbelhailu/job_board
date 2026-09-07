import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const postColumns = [
  columnHelper.accessor("jobName", {
    header: "Job Name",

    cell: ({ getValue }) => (
      <span className="font-medium text-gray-900">
        {getValue()}
      </span>
    ),
  }),

  columnHelper.accessor("date", {
    header: "Date",

    cell: ({ getValue }) => (
      <span className="text-gray-800">
        {getValue()}
      </span>
    ),
  }),
];