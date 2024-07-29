import { useState } from "react";
import MyButton from "../components/button";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { MdExpandMore } from "react-icons/md";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import JobCard from "../components/job-card";

const Jobs = () => {
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

  const content = {
    image: "",
    username: "make",
    location: "New York, USA",
    title: "software engineer",
    description:
      "lorem hi im the lost guy that you asked to find so take a rest it seems you already found me lorem hi im the lost guy that you asked to find so take a rest it seems you already found me it seems you already found me ",
  };

  const handleCheck = (checked, value, state, func) => {
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
        <div className="w-full lg:w-80 ">
          <div className="flex items-center justify-between px-4 filter lg:justify-around">
            <div className="text text-md font-bold">Filter Jobs</div>
            <MyButton
              className="mb-2 rounded-md p-0 text-xs font-bold"
              colored={true}
              onClick={clearFilter}
            >
              Clear All
            </MyButton>
          </div>
          <Accordion defaultExpanded className="m-0 border-0 shadow-none">
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
                  className="font-md cursor-pointer text-sm text-slate-700"
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
                  className="font-md cursor-pointer text-sm text-slate-700"
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
                  className="font-md cursor-pointer text-sm text-slate-700"
                >
                  Adama
                </span>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded className="text m-0 border-0 shadow-none">
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
                  className="font-md cursor-pointer text-sm text-slate-700"
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
                  className="font-md cursor-pointer text-sm text-slate-700"
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
                  className="font-md cursor-pointer text-sm text-slate-700"
                >
                  Medical
                </span>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded className="text m-0 border-0 shadow-none">
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
                  className="font-md cursor-pointer text-sm text-slate-700"
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
                  className="font-md cursor-pointer text-sm text-slate-700"
                >
                  $5000-$15000
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
                  className="font-md cursor-pointer text-sm text-slate-700"
                >
                  $15000-$30000
                </span>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="job-lists scrollbar-none grid h-auto max-h-[720px] w-full grid-cols-1 items-center justify-center gap-4 overflow-y-scroll md:grid-cols-2 xl:grid-cols-3">
          <JobCard content={content} btn={true} />
          <JobCard content={content} btn={true} />
          <JobCard content={content} btn={true} />
          <JobCard content={content} btn={true} />
          <JobCard content={content} btn={true} />
          <JobCard content={content} btn={true} />
          <JobCard content={content} btn={true} />
          <JobCard content={content} btn={true} />
          <JobCard content={content} btn={true} />
          <JobCard content={content} btn={true} />
          <JobCard content={content} btn={true} />
        </div>
      </div>
    </>
  );
};

export default Jobs;
