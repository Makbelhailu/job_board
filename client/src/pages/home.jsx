import fb from "../assets/fb.svg";
import amazon from "../assets/amazon.svg";
import figma from "../assets/figma.svg";
import google from "../assets/google.svg";
import linkedin from "../assets/linkedin.svg";
import microsoft from "../assets/microsoft.svg";
import user from "../assets/user.png";
import search from "../assets/search.png";
import file from "../assets/document.png";
import briefcase from "../assets/case.png";

import Marquee from "react-fast-marquee";
import MyButton from "./../components/button";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

import { JobCard } from "../components/cards";

const Home = () => {
  const marqueeContent = [
    "Software Engineer",
    "UI/UX Designer",
    "FullStack Developer",
    "Graphic Designer",
    "DevOPs Engineer",
    "Data Scientist",
    "Frontend Developer",
    "Backend Developer",
  ];
  const content = {
    image: "",
    username: "make",
    location: "New York, USA",
    title: "software engineer",
    description:
      "lorem hi im the lost guy that you asked to find so take a rest it seems you already found me ",
  };

  return (
    <div className="home relative my-24 w-full text-center">
      <div className="icons">
        <div className="icon absolute left-96 top-0 bg-white shadow-md">
          <img src={fb} alt="facebook icon" className="h-5 w-5" />
        </div>
        <div className="icon absolute left-32 top-40 bg-white shadow-md">
          <img src={amazon} alt="amazon icon" className="h-5 w-5" />
        </div>
        <div className="icon absolute left-96 top-64 bg-white shadow-md">
          <img src={figma} alt="figma icon" className="h-5 w-5" />
        </div>
        <div className="icon absolute right-72 top-12 bg-white shadow-md">
          <img src={google} alt="google icon" className="h-5 w-5" />
        </div>
        <div className="icon absolute right-36 top-32 bg-white shadow-md">
          <img src={linkedin} alt="linkedin icon" className="h-5 w-5" />
        </div>
        <div className="icon absolute right-80 top-80 bg-white shadow-md">
          <img src={microsoft} alt="microsoft icon" className="h-5 w-5" />
        </div>
      </div>
      <div className="content flex flex-col items-center justify-center">
        <div className="promo my-6">
          <p className="w-fit rounded-3xl bg-orange-100 px-4 py-1 text-xs font-semibold text-orangeish">
            No.1 Job Board website
          </p>
        </div>
        <div className="title mb-8 text-7xl font-bold">
          <p>Search, Apply & </p>
          <p className="mt-3">
            Get Your <span className="text-secondary">Dream Job</span>
          </p>
        </div>
        <div className="description px-10 ">
          <p className="text-sm leading-loose text-slate-600">
            start your hunt for the best, life-changing career opportunity from
            here in your <br />
            selected areas conveniently and get hired quickly
          </p>
        </div>
        <div className="buttons mt-8 flex items-center justify-center gap-10">
          <button className="btn-primary px-4 py-3">Browse Jobs</button>
          <div className=" flex cursor-pointer items-center justify-between gap-5">
            <div className="play-button relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <div className="play"></div>
            </div>
            <div className="text">
              <span>How it works?</span>
            </div>
          </div>
        </div>
      </div>
      <div className="marquees relative mt-20">
        <Marquee
          className="my-3"
          direction="right"
          delay="1"
          speed={30}
          pauseOnHover={true}
        >
          {marqueeContent.map((text, index) => {
            let i = index % 2 ? true : false;
            return (
              <MyButton key={index} colored={i}>
                {text}
              </MyButton>
            );
          })}
        </Marquee>
        <Marquee
          className="my-3"
          direction="left"
          delay="1"
          speed={30}
          pauseOnHover={true}
        >
          {marqueeContent.map((text, index) => {
            let i = index % 2 ? true : false;
            return (
              <MyButton key={index} colored={i}>
                {text}
              </MyButton>
            );
          })}
        </Marquee>
      </div>
      <div className="about my-28">
        <div className="header">
          <h1 className="text-4xl font-bold">
            Get Hired in 4{" "}
            <span className="text-secondary">Quick Easy Steps</span>
          </h1>
          <p className="mt-4 text-xs leading-loose text-slate-600">
            The quicker and most effective way to get hired by the top firm
            working in <br />
            your career interest areas.
          </p>
        </div>
        <div className="cards mt-24 flex flex-wrap justify-around gap-y-5 px-5">
          <Card sx={{ maxWidth: 300, borderRadius: 3 }} className="xl:mt-10">
            <CardContent className="m-5  mb-3  mr-3">
              <Avatar src={user} alt="user icon" />
              <h2 className="my-5 mb-2 text-left text-lg font-semibold">
                Create An Account
              </h2>
              <p className="text-left text-xs leading-normal text-slate-500">
                Signup for the job applicant profle, mention your
                qualifications, post experience, and expertise, and scope your
                interests, Vola! You're all set to find your dream jobs
              </p>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300, borderRadius: 3 }} className="xl:mb-10">
            <CardContent className="m-5  mb-3  mr-3">
              <Avatar src={search} alt="search icon" />
              <h2 className="mb-2 mt-5 text-left text-lg font-semibold">
                Search Job
              </h2>
              <p className="text-left text-xs leading-normal text-slate-500">
                Once you set your job hunting parameters, you'll find many
                openings related to your career interest on the home page and
                even filter out some of the best job openings.
              </p>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300, borderRadius: 3 }} className="xl:mt-10 ">
            <CardContent className="m-5  mb-3  mr-3">
              <Avatar
                src={file}
                alt="document icon"
                className="bg-[#2cbb543d]"
              />
              <h2 className="mb-2 mt-5 text-left text-lg font-semibold">
                Upload CV/ Resume
              </h2>
              <p className="text-left text-xs leading-normal text-slate-500">
                From numerous job openings, shortlist hte right-match vacancy to
                your profile and apply right after by uploading your CV/ Resume
                and answering a couple of questions.
              </p>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300, borderRadius: 3 }} className="xl:mb-10">
            <CardContent className="m-5  mb-3  mr-3">
              <Avatar
                src={briefcase}
                alt="briefcase icon"
                className="bg-[#F6EE063d]"
              />
              <h2 className="mb-2 mt-5 text-left text-lg font-semibold">
                Get Job
              </h2>
              <p className="text-left text-xs leading-normal text-slate-500">
                After applying, wait for some time, schedule an interview and if
                everything goes right, then get hired more quickly than
                traditional hiring methods.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="job_container">
        <div className="job_header flex items-center justify-between">
          <div className="job_content">
            <h1 className="mb-2 text-left text-4xl font-bold">
              <span className="text-secondary">Latest and Top</span> Job
              Openings
            </h1>
            <p className="text-left text-xs leading-loose opacity-70">
              Discover the fresh job openings from the giant firms in which you
              might want to apply <br />
              and take a chance to get hired by top fortune companies.
            </p>
          </div>
          <div className="job_button self-end">
            <MyButton
              className="rounded-md p-0 text-xs font-semibold"
              colored={true}
            >
              View All Jobs
            </MyButton>
          </div>
        </div>
        <div className="job_cards flex w-full flex-wrap items-center justify-around gap-4">
          <JobCard content={content} />
        </div>
      </div>
    </div>
  );
};

export default Home;
