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
  const [location, setLocation] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [salary, setSalary] = useState([]);
  const [isChecked, setIsChecked] = useState([{
    0: false,
    1: false,
    2: false
  },
  {
    0: false,
    1: false,
    2: false
  },
  {
    0: false,
    1: false,
    2: false
  }]);

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
    setIsChecked(false)
  };
  return (
    <>
      <div className="flex justify-between gap-12">
        <div className="sticky left-0 w-80 ">
          <div className="fillter flex items-center justify-around">
            <div className="text text-md font-bold">Filter Jobs</div>
            <MyButton
              className="mb-2 rounded-md p-0 text-xs font-bold"
              colored={true}
              // onClick={clearFilter}
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
                <Checkbox size="small" name="dire" checked={isChecked[0][0]} onChange={() => {
                  setIsChecked([...isChecked, isChecked[0][0] = !isChecked[0][0] ])
                }}/>
                <label
                  htmlFor="dire"
                  onClick={() => {
                    setIsChecked([...isChecked, isChecked[0][0] = !isChecked[0][0] ])
                  }}
                  className="font-md cursor-pointer text-sm text-slate-700"
                >
                  Dire Dawa
                </label>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  inputProps={{
                    "aria-label": "Addis Ababa",
                  }}
                />
                <label className="font-md cursor-pointer text-sm text-slate-700">
                  Addis Ababa
                </label>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  inputProps={{
                    "aria-label": "Adama",
                  }}
                />
                <span className="font-md text-sm text-slate-700">Adama</span>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded className="text text-md m-0 font-bold">
            <AccordionSummary
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
                  inputProps={{
                    "aria-label": "Dire Dawa",
                  }}
                />
                <span className="font-md text-sm text-slate-700">
                  Dire Dawa
                </span>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  inputProps={{
                    "aria-label": "Addis Ababa",
                  }}
                />
                <span className="font-md text-sm text-slate-700">
                  Addis Ababa
                </span>
              </div>
              <div className="checkboxes">
                <Checkbox
                  size="small"
                  inputProps={{
                    "aria-label": "Adama",
                  }}
                />
                <span className="font-md text-sm text-slate-700">Adama</span>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="job-lists h-aut grid w-full grid-cols-3 items-center justify-around gap-4">
          <JobCard content={content} />
          <JobCard content={content} />
          <JobCard content={content} />
          <JobCard content={content} />
          <JobCard content={content} />
          <JobCard content={content} />
        </div>
      </div>
    </>
  );
};

export default Jobs;
