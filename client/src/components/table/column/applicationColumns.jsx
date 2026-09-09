import { createColumnHelper } from "@tanstack/react-table";
import {
  FiXCircle,
  FiEdit,
  FiEye
} from "react-icons/fi";
import { LuCalendarX2 } from "react-icons/lu";

import { Link } from "react-router-dom";

const columnHelper = createColumnHelper();

export const applicationColumns = [
  columnHelper.accessor("title", {
    header: "Job Title",

    cell: ({ row }) => {
      const job = row.original;

      return (
        <div className="flex items-center gap-3">
          <span
            className={`
              h-2.5 w-2.5 rounded-full
              ${
                job.status === "accepted"
                  ? "bg-green-500"
                  : job.status === "interview"
                    ? "bg-blue-500"
                    : "bg-yellow-400"
              }
            `}
          />

          <span className="font-medium text-gray-900">
            {job.title}
          </span>
        </div>
      );
    },
  }),

  columnHelper.accessor("type", {
    header: "Job type",

    cell: ({ getValue }) => (
      <span className="text-gray-800 font-medium">
        {getValue()}
      </span>
    ),
  }),

  columnHelper.accessor("salary", {
    header: "Salary",

    cell: ({ getValue }) => (
      <span className="text-gray-800 font-medium">
        ${getValue()}
      </span>
    ),
  }),

  columnHelper.accessor("experience", {
    header: "Experience",

    cell: ({ getValue }) => (
      <span className="text-gray-800 font-medium">
        {getValue()}
      </span>
    ),
  }),

  columnHelper.accessor("location", {
    header: "Location",

    cell: ({ getValue }) => (
      <span className="text-gray-800 font-medium">
        {getValue()}
      </span>
    ),
  }),

  columnHelper.display({
    id: "actions",

    header: "Action",

    cell: ({ row }) => {
      const job = row.original;

      return (
        <div className="flex items-center gap-4">

          {/* view */}
          <Link
            to={`/jobs/${job._id}`}
            className="text-secondary transition hover:scale-110"
            title="View"
          >
            <FiEye size={20} />
          </Link>

            {
                job.status === "pending" && (
                    <>
                        {/* edit */}
                        <button
                            type="button"
                            onClick={() => console.log("Edit", job)}
                            className="text-blue-500 transition hover:scale-110"
                            title="Edit"
                        >
                            <FiEdit size={20} />
                        </button>

                        {/* cancel */}
                        <button
                            type="button"
                            onClick={() =>
                            console.log("cancel", job)
                            }
                            className="text-red-500 transition hover:scale-110"
                            title="Cancel Application"
                        >
                            <FiXCircle size={20} />
                        </button>

                        
                    </>
                )
            }

            {
                job.status === "interview" && (
                    <>
                        {/* Accept */}
                        <button
                            type="button"
                            onClick={() =>
                            console.log("Accept", job)
                            }
                            className="text-red-500 transition hover:scale-110"
                            title="Accept"
                        >
                            <LuCalendarX2 size={20} />
                        </button>
                    </>
                )
            }
        </div>
      );
    },
  }),
];