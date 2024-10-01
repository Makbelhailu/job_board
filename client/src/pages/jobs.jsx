import { useState, useEffect, useRef } from "react";
import MyButton from "../components/button";
import Loading from "../components/loading";
import SearchBar from "../components/searchBar";
import JobCard from "../components/job-card";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Checkbox from "@mui/material/Checkbox";

import { MdExpandMore } from "react-icons/md";

import { Link, useLocation, useSearchParams } from "react-router-dom";

import { useRecoilState, useRecoilValue } from "recoil";
import { jobsState, searchJobState } from "../utils/states";
import { fetchJobs, fetchByFilter } from "../utils/functions";

const Jobs = () => {
  const defaultState = {
    countries: [],
    sectors: [],
    type: [],
  };
  const [filters, setFilters] = useState(defaultState);
  const [jobList, setJobList] = useRecoilState(jobsState);
  const [filteredJob, setFilteredJob] = useState([]);
  const [searchedJob, setSearchedJob] = useRecoilState(searchJobState);
  const [searchValue, setSearchValue] = useState(null);
  const [searchInputValue, setSearchInputValue] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(parseInt(query.get("page") || "1", 10));
  const [count, setCount] = useState(page);
  const [expand, setExpand] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setExpand(window.innerWidth >= 1024);
      console.log(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    setPage(parseInt(query.get("page") || "1", 10));
    setIsLoading(true);
  }, [query]);

  useEffect(() => {
    if (!searchedJob.length) {
      const fetchInterval = setInterval(() => {
        fetchJobs(page)
          .then((data) => {
            if (data.jobs.length > 12 && page == count) setCount(count + 1);
            setJobList(data.jobs.splice(0, 12));
            clearInterval(fetchInterval);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log("error fetching jobs:", err.message);
          });
      }, 5000);

      return () => clearInterval(fetchInterval);
    }
    if (filteredJob.length) {
      setIsLoading(true);
      fetchByFilter(filters, searchInputValue, page).then((data) => {
        if (data.jobs.length > 12 && page == count) setCount(count + 1);
        setFilteredJob(data.jobs.splice(0, 12));
        setIsLoading(false);
      });
    }
  }, [page, isLoading]);

  const handleFilterChange = (event, filterType) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    setCount(1);
    setQuery({ ...query, page: 1 });

    const newFilter = {
      ...filters,
      [filterType]: isChecked
        ? [...filters[filterType], value]
        : filters[filterType].filter((item) => item !== value),
    };
    setFilters(newFilter);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchByFilter(filters, searchInputValue, page).then((data) => {
      if (data.jobs.length > 12 && page == count) setCount(count + 1);
      setFilteredJob(data.jobs.splice(0, 12));
      setIsLoading(false);
    });
  }, [filters]);

  const clearFilter = () => {
    setFilters(defaultState);
    setSearchedJob([]);
    setFilteredJob([]);
    setSearchValue(null);
    setSearchInputValue("");
    setQuery({ ...query, page: 1 });
  };

  const clearFilterState = () => {
    setFilters(defaultState);
  };

  const jobListToMap =
    filteredJob && filteredJob.length > 0
      ? filteredJob
      : searchedJob && searchedJob.length > 0
        ? searchedJob
        : jobList;

  return (
    <>
      <div className="mt-12 flex w-full grid-cols-5 flex-col items-center justify-center gap-4 space-y-4 lg:grid lg:items-start">
        <div className="col-span-5 col-start-2 row-start-1 max-lg:w-full">
          <SearchBar
            inputValue={searchInputValue}
            setInputValue={setSearchInputValue}
            value={searchValue}
            setValue={setSearchValue}
            page={page}
            setPage={query}
            count={count}
            setCount={setCount}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            clearFilterState={clearFilterState}
          />
        </div>
        <div className="col-start-1 row-span-12 row-start-1 max-lg:w-full">
          <div className="flex w-full items-center justify-between px-4 filter lg:justify-around">
            <div className="text text-sm font-bold xl:text-base">
              Filter Jobs
            </div>
            <div>
              <MyButton
                className="mb-2 cursor-pointer rounded-md px-3 text-center text-xs font-bold lg:w-full lg:px-2 xl:px-3 "
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
                  checked={filters.countries.includes("Dire Dawa")}
                  value={"Dire Dawa"}
                  name="dire"
                  id="dire"
                  onChange={(e) => handleFilterChange(e, "countries")}
                />
                <label
                  htmlFor="dire"
                  className="cursor-pointer text-xs font-semibold text-slate-700"
                >
                  Dire Dawa
                </label>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={filters.countries.includes("Addis Ababa")}
                  value={"Addis Ababa"}
                  onChange={(e) => handleFilterChange(e, "countries")}
                  name="addis"
                  id="addis"
                />
                <label
                  htmlFor="addis"
                  className="cursor-pointer text-xs font-semibold text-slate-700"
                >
                  Addis Ababa
                </label>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={filters.countries.includes("Harar")}
                  value={"Harar"}
                  name="harar"
                  id="harar"
                  onChange={(e) => handleFilterChange(e, "countries")}
                />
                <label
                  htmlFor="harar"
                  className="cursor-pointer text-xs font-semibold text-slate-700"
                >
                  Harar
                </label>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={filters.countries.includes("Adama")}
                  value={"Adama"}
                  name="adama"
                  id="adama"
                  onChange={(e) => handleFilterChange(e, "countries")}
                />
                <label
                  htmlFor="adama"
                  className="cursor-pointer text-xs font-semibold text-slate-700"
                >
                  Adama
                </label>
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
              Sector
            </AccordionSummary>
            <AccordionDetails>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={filters.sectors.includes("it")}
                  value={"it"}
                  name="it"
                  id="it"
                  onChange={(e) => handleFilterChange(e, "sectors")}
                />
                <label
                  htmlFor="it"
                  className="cursor-pointer text-xs font-semibold text-slate-700"
                >
                  IT
                </label>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={filters.sectors.includes("business")}
                  onChange={(e) => handleFilterChange(e, "sectors")}
                  name="business"
                  id="business"
                  value={"business"}
                />
                <label
                  htmlFor="business"
                  className="cursor-pointer text-xs font-semibold text-slate-700 lg:text-[10px] xl:text-xs"
                >
                  Business and Finance
                </label>
              </div>
              <div className="checkboxes">
                <Checkbox
                  checked={filters.sectors.includes("healthcare")}
                  size="small"
                  onChange={(e) => handleFilterChange(e, "sectors")}
                  name="health"
                  id="health"
                  value={"healthcare"}
                />
                <label
                  htmlFor="health"
                  className="cursor-pointer text-xs font-semibold text-slate-700 lg:text-[10px] xl:text-xs"
                >
                  Health and Medical
                </label>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  onChange={(e) => handleFilterChange(e, "sectors")}
                  name="education"
                  id="education"
                  value={"education"}
                />
                <label
                  htmlFor="education"
                  className="cursor-pointer text-xs font-semibold text-slate-700 lg:text-[10px] xl:text-xs"
                >
                  Education and Training
                </label>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={filters.sectors.includes("sales")}
                  onChange={(e) => handleFilterChange(e, "sectors")}
                  name="sales"
                  id="sales"
                  value={"sales"}
                />
                <label
                  htmlFor="sales"
                  className="cursor-pointer text-xs font-semibold text-slate-700 lg:text-[10px] xl:text-xs"
                >
                  Sales and Marketing
                </label>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={filters.sectors.includes("other")}
                  onChange={(e) => handleFilterChange(e, "sectors")}
                  name="other"
                  id="other"
                  value={"other"}
                />
                <label
                  htmlFor="other"
                  className="cursor-pointer text-xs font-semibold text-slate-700 lg:text-[10px] xl:text-xs"
                >
                  Other
                </label>
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
              Type
            </AccordionSummary>
            <AccordionDetails>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={filters.type.includes("FullTime")}
                  onChange={(e) => handleFilterChange(e, "type")}
                  name="full"
                  id="full"
                  value={"FullTime"}
                />
                <label
                  htmlFor="full"
                  className="cursor-pointer text-xs font-semibold text-slate-700"
                >
                  Full-Time
                </label>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={filters.type.includes("PartTime")}
                  onChange={(e) => handleFilterChange(e, "type")}
                  name="part"
                  id="part"
                  value={"PartTime"}
                />
                <label
                  htmlFor="part"
                  className="cursor-pointer text-xs font-semibold text-slate-700"
                >
                  Part-Time
                </label>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={filters.type.includes("Remote")}
                  onChange={(e) => handleFilterChange(e, "type")}
                  name="remote"
                  id="remote"
                  value={"Remote"}
                />
                <label
                  htmlFor="remote"
                  className="cursor-pointer text-xs font-semibold text-slate-700"
                >
                  Remote
                </label>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  checked={filters.type.includes("Intern")}
                  onChange={(e) => handleFilterChange(e, "type")}
                  name="intern"
                  id="intern"
                  value={"Intern"}
                />
                <label
                  htmlFor="intern"
                  className="cursor-pointer text-xs font-semibold text-slate-700"
                >
                  Intern
                </label>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        {isLoading ? (
          <div className="col-span-5 col-start-2 row-span-11 row-start-2 flex h-full w-full items-center justify-center gap-8 max-md:my-32">
            <Loading />
          </div>
        ) : (
          <div className="col-span-5 col-start-2 row-span-11 row-start-2 flex flex-col items-center justify-center gap-8 max-md:mb-12">
            <div className="job-lists scrollbar-none grid h-full w-full grid-cols-1 items-center justify-center gap-4 overflow-y-scroll  p-1 md:grid-cols-2 xl:grid-cols-3">
              {jobListToMap.map((content, key) => (
                <JobCard key={key} content={content} btn={true} />
              ))}
            </div>
          </div>
        )}
      </div>
      {!isLoading && (
        <div className="my-5 flex w-full items-center justify-center">
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
    </>
  );
};

export default Jobs;
