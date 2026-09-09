import { createColumnHelper } from "@tanstack/react-table";
import {
  FiCalendar,
  FiCheckCircle,
  FiXCircle,
  FiEye
} from "react-icons/fi";

import { Link } from "react-router-dom";

const columnHelper = createColumnHelper();

export const applicantColumns = [
  columnHelper.accessor("name", {
    header: "Profile",

    cell: ({ row }) => {
      const applicant = row.original;

      return (
        <div className="flex items-center gap-3">
          <span
            className={`
              h-2.5 w-2.5 rounded-full
              ${
                applicant.status === "accepted"
                  ? "bg-green-500"
                  : applicant.status === "interview"
                    ? "bg-blue-500"
                    : "bg-yellow-400"
              }
            `}
          />

          <span className="font-medium text-gray-900">
            {applicant.name}
          </span>
        </div>
      );
    },
  }),

  columnHelper.accessor("education", {
    header: "Lvl of Education",

    cell: ({ getValue }) => (
      <span className="text-gray-800">
        {getValue()}
      </span>
    ),
  }),

  columnHelper.accessor("address", {
    header: "Address",

    cell: ({ getValue }) => (
      <span className="text-gray-800">
        {getValue()}
      </span>
    ),
  }),

  columnHelper.display({
    id: "actions",

    header: "Action",

    cell: ({ row }) => {
      const applicant = row.original;

      return (
        <div className="flex items-center gap-4">

          {/* view */}
          <Link
            to={`/applicants/${applicant.id}`}
            className="text-secondary transition hover:scale-110"
            title="View"
          >
            <FiEye size={20} />
          </Link>

          {/* Reject */}
          <button
            type="button"
            onClick={() => console.log("Reject", applicant)}
            className="text-red-500 transition hover:scale-110"
            title="Reject"
          >
            <FiXCircle size={20} />
          </button>

          {/* Interview */}
          <button
            type="button"
            onClick={() =>
              console.log("Interview", applicant)
            }
            className="text-blue-500 transition hover:scale-110"
            title="Interview"
          >
            <FiCalendar size={20} />
          </button>

          {/* Accept */}
          <button
            type="button"
            onClick={() =>
              console.log("Accept", applicant)
            }
            className="text-green-500 transition hover:scale-110"
            title="Accept"
          >
            <FiCheckCircle size={20} />
          </button>
        </div>
      );
    },
  }),
];