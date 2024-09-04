import { useState, useEffect } from "react";
import MyButton from "../components/button";
import Loading from "../components/loading";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Link, useLocation } from "react-router-dom";

import { MdExpandMore } from "react-icons/md";

import Checkbox from "@mui/material/Checkbox";

import JobCard from "../components/job-card";

import { useRecoilState } from "recoil";
import { jobsState } from "../utils/states";
import { fetchJobs, useQuery } from "../utils/functions";

const Jobs = () => {
  const [jobList, setJobList] = useRecoilState(jobsState);
  const [isLoading, setIsLoading] = useState(true);
  const path = useLocation();
  const query = useQuery(path);
  const search = query.get("search");
  const [page, setPage] = useState(parseInt(query.get("page") || "1", 10));
  const [count, setCount] = useState(page);
  const [expand] = useState(window.innerWidth >= 1024 ? true : false);

  const defaultState = [
    {
      0: false,
      1: false,
      2: false,
    },
    {
      0: false,
      1: false,
      2: false,
    },
    {
      0: false,
      1: false,
      2: false,
    },
  ];
  const [location, setLocation] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [salary, setSalary] = useState([]);
  const [isChecked, setIsChecked] = useState(defaultState);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let query = useQuery(path);
    setPage(parseInt(query.get("page") || "1", 10));
    setIsLoading(true);
  }, [path, search]);

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      fetchJobs(page)
        .then((data) => {
          setJobList(data);
          if (data.length >= 12 && page == count) setCount(count + 1);
          clearInterval(fetchInterval);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("error fetching jobs:", err.message);
        });
    }, 5000);

    return () => clearInterval(fetchInterval);
  }, [page, isLoading]);
  const handleCheck = ({ checked, value }, state, func) => {
    if (checked) {
      func([...state, value]);
    } else {
      func(state.filter((element) => element != value));
    }
  };

  const clearFilter = () => {
    setIsChecked(defaultState);
  };
  return (
    <>
      <div className="mt-12 flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-start">
        <div className="w-full lg:w-[300px] lg:min-w-[300px]">
          <div className="flex w-full items-center justify-between px-4 filter lg:justify-around">
            <div className="text text-md font-bold">Filter Jobs</div>
            <div>
              <MyButton
                className="mb-2 cursor-pointer rounded-md px-3 text-xs font-bold"
                colored={true}
                onClick={clearFilter}
              >
                Clear All
              </MyButton>
            </div>
          </div>
          <Accordion
            defaultExpanded={expand}
            className="m-0 border-0 shadow-none"
          >
            <AccordionSummary
              className="text text-md font-bold"
              id="panel-header"
              aria-controls="panel-content"
              expandIcon={
                <MdExpandMore className="text text-md m-0 font-bold" />
              }
            >
              Location
            </AccordionSummary>
            <AccordionDetails>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={isChecked[0][0]}
                  onChange={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[0][0] = !isChecked[0][0]),
                    ]);
                  }}
                />
                <label
                  htmlFor="dire"
                  onClick={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[0][0] = !isChecked[0][0]),
                    ]);
                  }}
                  className="cursor-pointer text-xs font-semibold text-slate-700"
                >
                  Dire Dawa
                </label>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={isChecked[0][1]}
                  onChange={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[0][1] = !isChecked[0][1]),
                    ]);
                  }}
                />
                <label
                  onClick={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[0][1] = !isChecked[0][1]),
                    ]);
                  }}
                  className="cursor-pointer text-xs font-semibold text-slate-700"
                >
                  Addis Ababa
                </label>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={isChecked[0][2]}
                  onChange={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[0][2] = !isChecked[0][2]),
                    ]);
                  }}
                />
                <span
                  onClick={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[0][2] = !isChecked[0][2]),
                    ]);
                  }}
                  className="cursor-pointer text-xs font-semibold text-slate-700"
                >
                  Adama
                </span>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            defaultExpanded={expand}
            className="text m-0 border-0 shadow-none"
          >
            <AccordionSummary
              className="text text-md font-bold"
              id="panel-header"
              aria-controls="panel-content"
              expandIcon={
                <MdExpandMore className="text text-md m-0 font-bold" />
              }
            >
              Industry
            </AccordionSummary>
            <AccordionDetails>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={isChecked[1][0]}
                  onChange={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[1][0] = !isChecked[1][0]),
                    ]);
                  }}
                />
                <span
                  onClick={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[1][0] = !isChecked[1][0]),
                    ]);
                  }}
                  className="cursor-pointer text-xs font-semibold text-slate-700"
                >
                  Information and Technology
                </span>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={isChecked[1][1]}
                  onChange={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[1][1] = !isChecked[1][1]),
                    ]);
                  }}
                />
                <span
                  onClick={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[1][1] = !isChecked[1][1]),
                    ]);
                  }}
                  className="cursor-pointer text-xs font-semibold text-slate-700"
                >
                  Financial Services
                </span>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={isChecked[1][2]}
                  onChange={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[1][2] = !isChecked[1][2]),
                    ]);
                  }}
                />
                <span
                  onClick={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[1][2] = !isChecked[1][2]),
                    ]);
                  }}
                  className="cursor-pointer text-xs font-semibold text-slate-700"
                >
                  Medical
                </span>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            defaultExpanded={expand}
            className="text m-0 border-0 shadow-none"
          >
            <AccordionSummary
              className="text text-md font-bold"
              id="panel-header"
              aria-controls="panel-content"
              expandIcon={
                <MdExpandMore className="text text-md m-0 font-bold" />
              }
            >
              Salary
            </AccordionSummary>
            <AccordionDetails>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={isChecked[2][0]}
                  onChange={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[2][0] = !isChecked[2][0]),
                    ]);
                  }}
                />
                <span
                  onClick={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[2][0] = !isChecked[2][0]),
                    ]);
                  }}
                  className="cursor-pointer text-sm font-semibold text-slate-700"
                >
                  $0-$5000
                </span>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={isChecked[2][1]}
                  onChange={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[2][1] = !isChecked[2][1]),
                    ]);
                  }}
                />
                <span
                  onClick={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[2][1] = !isChecked[2][1]),
                    ]);
                  }}
                  className="cursor-pointer text-sm font-semibold text-slate-700"
                >
                  $5000-$20000
                </span>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={isChecked[2][2]}
                  onChange={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[2][2] = !isChecked[2][2]),
                    ]);
                  }}
                />
                <span
                  onClick={() => {
                    setIsChecked([
                      ...isChecked,
                      (isChecked[2][2] = !isChecked[2][2]),
                    ]);
                  }}
                  className="cursor-pointer text-sm font-semibold text-slate-700"
                >
                  &gt; $20000
                </span>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="job-lists scrollbar-none grid h-full w-full grid-cols-1 items-center justify-center gap-4 overflow-y-scroll  p-1 md:grid-cols-2 xl:grid-cols-3">
              {jobList.map((content, key) => (
                <JobCard key={key} content={content} btn={true} />
              ))}
            </div>
            <Pagination
              page={page}
              count={count}
              size="large"
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/jobs?page=${item.page}`}
                  {...item}
                />
              )}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Jobs;
