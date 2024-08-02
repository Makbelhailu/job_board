import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { Link, useParams } from "react-router-dom";
import JobCard from "../components/job-card";
import { useRecoilValue } from "recoil";
import { jobsState } from "../utils/states";
import { formatDate } from "../utils/functions";

import { FaLocationDot } from "react-icons/fa6";

const ApplicationCard = () => {
  const jobList = useRecoilValue(jobsState);
  const [value, setValue] = useState(0);
  const { id } = useParams();
  const [jobInfo, setJobInfo] = useState(
    jobList.filter((job) => job._id === id)[0],
  );

  useEffect(() => {
    setJobInfo(jobList.filter((job) => job._id === id)[0]);
  }, [id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mt-6 w-full items-center gap-x-4 gap-y-8 py-6 xl:flex">
      <Card
        sx={{ maxWidth: "100%", borderRadius: 4, boxShadow: 8 }}
        className="card min-h-[40rem] w-full border p-12"
      >
        <CardContent>
          <div className="header flex items-center justify-between">
            <div className="title flex items-start gap-8">
              <Avatar
                src={jobInfo.profile}
                alt="user icon"
                sx={{ width: 60, height: 60 }}
              >
                {jobInfo.username}
              </Avatar>

              <div className="texts">
                <h2 className="text-3xl font-bold">{jobInfo.title}</h2>
                <h4 className="pl-1 text-xs font-semibold uppercase text-slate-700 group-hover:text-white">
                  {jobInfo.username}
                </h4>
                <div className="info my-4 flex items-center gap-4">
                  <div className="rounded-md bg-blueish-100 px-2 py-1 text-xs font-medium text-blueish-dark">
                    {jobInfo.vacancy > 1
                      ? `${jobInfo.vacancy} Positions`
                      : `${jobInfo.vacancy} Position`}
                  </div>
                  <div className="rounded-md  bg-orangeish-100 px-2 py-1 text-xs font-medium text-orangeish-dark ">
                    {jobInfo.type}
                  </div>
                  <div className="rounded-md bg-greenish-100 px-2 py-1 text-xs font-medium text-greenish-dark ">
                    ${jobInfo.salary}
                  </div>
                  <div className="flex items-center gap-x-[2px] rounded-md bg-orangeish-100 px-2 py-1 text-xs font-medium text-orangeish ">
                    <FaLocationDot className="text-xs" />
                    <span>{jobInfo.location}</span>
                  </div>
                  <div className="rounded-md bg-greenish-100 px-2 py-1 text-xs font-medium text-redish ">
                    {jobInfo.experience} Years
                  </div>
                </div>
              </div>
            </div>

            <Link to={`/apply/${jobInfo._id}?title=${jobInfo.title}`}>
              <button className="btn-primary px-4 py-2 text-sm ">
                Apply Now
              </button>
            </Link>
          </div>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  className="!text-xs !font-bold"
                  label="Description"
                  {...a11yProps(0)}
                />
                <Tab
                  className="!text-xs !font-bold"
                  label="Responsibility"
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <p className="mb-8 text-sm text-slate-700">
                {jobInfo.description}
              </p>

              <h2 className="my-4 text-sm font-semibold">
                Essential Knowledge, Skill And Qualification
              </h2>
              <ul className="list-outside list-disc pl-8 text-sm leading-loose text-slate-700">
                {jobInfo["requirements"].map((req, key) => (
                  <li key={key}>{req}</li>
                ))}
              </ul>
              <h2 className="mt-8 text-sm font-semibold">
                Deadline:
                <span className="ml-2 text-xs font-medium">
                  {formatDate(jobInfo.deadline)}
                </span>
              </h2>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <ul className="mt-4 list-outside list-disc text-sm leading-loose text-slate-700">
                {jobInfo["responsibility"].map((req, key) => (
                  <li key={key}>{req}</li>
                ))}
              </ul>
            </CustomTabPanel>
          </Box>
        </CardContent>
      </Card>
      <div className="job-lists scrollbar-none gird-rows-1 grid max-h-[680px] w-full grid-flow-col gap-4 overflow-x-scroll py-6 xl:w-2/5 xl:grid-flow-row xl:grid-cols-1 xl:overflow-x-hidden xl:overflow-y-scroll">
        {jobList
          .filter((job) => job._id !== id)
          .map((content, key) => (
            <JobCard
              key={key}
              content={content}
              btn={true}
              className={"w-[450px]"}
            />
          ))}
      </div>
    </div>
  );
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default ApplicationCard;
