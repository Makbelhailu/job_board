import { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { Link } from "react-router-dom";
import MyButton from "./button";
import JobCard from "../components/job-card";

const ApplicationCard = ({ content }) => {
  content = {
    _id: "2f4rrf478hgg",
    profile:
      "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png",
    title: "Full Stack Developer",
    type: "FullTime",
    vacancy: 2,
    salary: "120,000/Year",
    experience: 2,
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, animi? Temporibus ab asperiores enim perferendis! Quibusdam similique delectus omnis laborum voluptate hic at suscipit. Hic vel non voluptatibus alias aspernatur.",
    requirements: [
      "Sooner settle add put you sudden him.",
      "To sorry world an at do spoil along.",
      "Incommode he depending do frankness remainder to. Edward day",
      "soon. It merely waited do unable.",
    ],
  };

  const [value, setValue] = useState(0);

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
                src={content.profile}
                alt="user icon"
                sx={{ width: 60, height: 60 }}
              >
                H
              </Avatar>

              <div className="texts">
                <h2 className="text-3xl font-bold">{content.title}</h2>
                <div className="info my-3 flex items-center gap-4">
                  <div className="rounded-md bg-blueish-100 px-2 py-1 text-xs font-medium text-blueish-dark">
                    {content.vacancy > 1
                      ? `${content.vacancy} Positions`
                      : `${content.vacancy} Position`}
                  </div>
                  <div className="rounded-md  bg-orangeish-100 px-2 py-1 text-xs font-medium text-orangeish-dark ">
                    {content.type}
                  </div>
                  <div className="rounded-md bg-greenish-100 px-2 py-1 text-xs font-medium text-greenish-dark ">
                    ${content.salary}
                  </div>
                  <div className="rounded-md bg-greenish-100 px-2 py-1 text-xs font-medium text-redish ">
                    {content.experience} Years
                  </div>
                </div>
              </div>
            </div>

            <Link to={`/apply/${content._id}?title=${content.title}`}>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus ab architecto asperiores commodi consequatur suscipit
                dolorem ex. Nesciunt maxime recusandae quis. Quam labore dolor
                laboriosam nulla tempora? Placeat, quisquam veritatis. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Possimus ab
                architecto asperiores commodi consequatur suscipit dolorem ex.
                Nesciunt maxime recusandae quis. Quam labore dolor laboriosam
                nulla tempora? Placeat, quisquam veritatis.
              </p>

              <h2 className="my-4 text-sm font-semibold">
                Essential Knowledge, Skill And Qualification
              </h2>
              <ul className="list-outside list-disc pl-8 text-sm leading-loose text-slate-700">
                <li>skill 1</li>
                <li>skill 2</li>
                <li>skill 3</li>
                <li>skill 4</li>
              </ul>
              <h2 className="mt-8 text-sm font-semibold">
                Deadline:
                <span className="ml-2 text-xs font-medium">July 5, 2024</span>
              </h2>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <ul className="mt-4 list-outside list-disc text-sm leading-loose text-slate-700">
                <li>skill 1</li>
                <li>skill 2</li>
                <li>skill 3</li>
                <li>skill 4</li>
              </ul>
            </CustomTabPanel>
          </Box>
        </CardContent>
      </Card>
      <div className="job-lists scrollbar-none gird-rows-1 grid max-h-[680px] w-full grid-flow-col gap-4 overflow-x-scroll py-6 xl:w-2/5 xl:grid-flow-row xl:grid-cols-1 xl:overflow-x-hidden xl:overflow-y-scroll">
        <JobCard content={content} btn={true} className={"w-[450px]"} />
        <JobCard content={content} btn={true} className={"w-[450px]"} />
        <JobCard content={content} btn={true} className={"w-[450px]"} />
        <JobCard content={content} btn={true} className={"w-[450px]"} />
        <JobCard content={content} btn={true} className={"w-[450px]"} />
        <JobCard content={content} btn={true} className={"w-[450px]"} />
        <JobCard content={content} btn={true} className={"w-[450px]"} />
        <JobCard content={content} btn={true} className={"w-[450px]"} />
        <JobCard content={content} btn={true} className={"w-[450px]"} />
        <JobCard content={content} btn={true} className={"w-[450px]"} />
        <JobCard content={content} btn={true} className={"w-[450px]"} />
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
