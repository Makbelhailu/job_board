/* eslint-disable react/prop-types */
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useState } from "react";
import {
  FiChevronDown,
  FiSearch,
} from "react-icons/fi";

import DataTablePagination from "./DataTablePagination";
import LoadingRows from "./DataTableSkeleton";


const DataTable = ({
  title,
  data = [],
  columns = [],
  searchable = true,
  searchPlaceholder = "Search...",
  pageSize = 7,
  loading = false,
}) => {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,

    state: {
      sorting,
      globalFilter,
      rowSelection,
    },

    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,

    enableRowSelection: true,

    initialState: {
      pagination: {
        pageSize,
      },
    },

    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const rows = table.getRowModel().rows;

  return (
    <div className="w-full rounded-2xl bg-white p-5">
      {/* Header */}
      <div className="mb-5 flex flex-col gap-y-4 sm:flex-row sm:items-center sm:justify-between">
        {title && (
          <h2 className="text-2xl font-bold text-black">
            {title}
          </h2>
        )}

        {searchable && (
          <div className="relative w-full sm:w-64">
            <FiSearch
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              value={globalFilter ?? ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder={searchPlaceholder}
              className="
                h-10 w-full rounded-xl
                border border-gray-200
                bg-gray-50
                pl-9 pr-3
                text-sm text-gray-700
                outline-none
                transition
                focus:border-primary
                focus:bg-white
              "
            />
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-b border-gray-200"
              >
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.getCanSort();
                  const sorted = header.column.getIsSorted();

                  return (
                    <th
                      key={header.id}
                      className="px-2 pb-4 text-left text-xs font-medium text-gray-600 first:pl-0 last:pr-0"
                    >
                      {header.isPlaceholder ? null : (
                        <button
                          type="button"
                          disabled={!canSort}
                          onClick={header.column.getToggleSortingHandler()}
                          className={`
                            flex items-center gap-1
                            ${
                              canSort
                                ? "cursor-pointer hover:text-black"
                                : "cursor-default"
                            }
                          `}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}

                          {canSort && (
                            <FiChevronDown
                              size={13}
                              className={`
                                transition-transform
                                ${
                                  sorted === "desc"
                                    ? "rotate-180"
                                    : ""
                                }
                                ${
                                  !sorted
                                    ? "opacity-30"
                                    : "opacity-100"
                                }
                              `}
                            />
                          )}
                        </button>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>

          <tbody>
            {loading ? (
              <LoadingRows columns={columns.length} />
            ) : rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-12 text-center text-sm text-gray-400"
                >
                  No results found
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr
                  key={row.id}
                  className="
                    border-b border-gray-100
                    last:border-b-0
                    hover:bg-gray-50/70
                  "
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="
                        px-2 py-4
                        text-sm
                        first:pl-0
                        last:pr-0
                      "
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <DataTablePagination table={table} />
    </div>
  );
};

/* -------------------------------- */
/* Pagination */
/* -------------------------------- */



/* -------------------------------- */
/* Loading */
/* -------------------------------- */



export default DataTable;