/* eslint-disable react/prop-types */

import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

const DataTablePagination = ({ table }) => {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;

  const totalRows = table.getFilteredRowModel().rows.length;

  const start =
    totalRows === 0 ? 0 : pageIndex * pageSize + 1;

  const end = Math.min(
    (pageIndex + 1) * pageSize,
    totalRows
  );

  return (
    <div className="mt-5 flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Results */}
      <p className="text-xs text-gray-500">
        Showing{" "}
        <span className="font-medium text-gray-700">
          {start}–{end}
        </span>{" "}
        of{" "}
        <span className="font-medium text-gray-700">
          {totalRows}
        </span>
      </p>

      <div className="flex items-center gap-2">
        {/* Page size */}
        <select
          value={pageSize}
          onChange={(e) =>
            table.setPageSize(Number(e.target.value))
          }
          className="
            h-8 rounded-lg
            border border-gray-200
            bg-white px-2
            text-xs text-gray-600
            outline-none
          "
        >
          <option value={7}>7 / page</option>
          <option value={10}>10 / page</option>
          <option value={20}>20 / page</option>
          <option value={50}>50 / page</option>
        </select>

        {/* First */}
        <PaginationButton
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.setPageIndex(0)}
        >
          <FiChevronsLeft size={14} />
        </PaginationButton>

        {/* Previous */}
        <PaginationButton
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          <FiChevronLeft size={14} />
        </PaginationButton>

        {/* Current page */}
        <span className="min-w-[60px] text-center text-xs text-gray-600">
          {pageIndex + 1} / {table.getPageCount() || 1}
        </span>

        {/* Next */}
        <PaginationButton
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          <FiChevronRight size={14} />
        </PaginationButton>

        {/* Last */}
        <PaginationButton
          disabled={!table.getCanNextPage()}
          onClick={() =>
            table.setPageIndex(table.getPageCount() - 1)
          }
        >
          <FiChevronsRight size={14} />
        </PaginationButton>
      </div>
    </div>
  );
};

const PaginationButton = ({
  children,
  disabled,
  onClick,
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="
        flex h-8 w-8
        items-center justify-center
        rounded-lg
        border border-gray-200
        text-gray-500
        transition
        hover:bg-gray-100
        hover:text-gray-900
        disabled:cursor-not-allowed
        disabled:opacity-30
      "
    >
      {children}
    </button>
  );
};

export default DataTablePagination;
