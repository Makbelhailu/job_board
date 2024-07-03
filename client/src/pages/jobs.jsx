import React from "react";
import MyButton from "../components/button";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

const Jobs = () => {
  return (
    <div className="sticky left-0 h-screen w-80 ">
      <div className="fillter flex items-center justify-around">
        <div className="text text-md font-bold">Filter Jobs</div>
        <MyButton
          className="mb-2 rounded-md p-0 text-xs font-bold"
          colored={true}
        >
          Clear All
        </MyButton>
      </div>
      <Accordion defaultExpanded>
        <AccordionSummary id="panel-header" aria-controls="panel-content">
          Header
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary id="panel-header" aria-controls="panel-content">
          Header
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Jobs;
