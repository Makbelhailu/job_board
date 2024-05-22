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

import jobImg from "../assets/job-recommendation.jpg";
import projectProfileImg from "../assets/project-profile.jpg";
import careerImg from "../assets/career-dev.jpg";

import JobCard from "../components/job-card";

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
      "lorem hi im the lost guy that you asked to find so take a rest it seems you already found me lorem hi im the lost guy that you asked to find so take a rest it seems you already found me it seems you already found me ",
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
          <p className="text-sm font-semibold leading-loose text-slate-700">
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
          <p className="mt-4 text-xs font-semibold leading-loose text-slate-700">
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
              <p className="text-left text-xs font-medium leading-normal text-slate-600">
                Signup for the job applicant profile, mention your
                qualifications, post experience, and expertise, and scope your
                interests, Vola! You&lsquo;re all set to find your dream jobs
              </p>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300, borderRadius: 3 }} className="xl:mb-10">
            <CardContent className="m-5  mb-3  mr-3">
              <Avatar src={search} alt="search icon" />
              <h2 className="mb-2 mt-5 text-left text-lg font-semibold">
                Search Job
              </h2>
              <p className="text-left text-xs font-medium leading-normal text-slate-600">
                Once you set your job hunting parameters, you&lsquo;ll find many
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
              <p className="text-left text-xs font-medium leading-normal text-slate-600">
                From numerous job openings, shortlist hte right-match vacancy to
                your profile and apply right after by uploading your CV/ Resume
                and answering a couple of questions.
              </p>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300, borderRadius: 3 }} className="xl:mb-10">
            <CardContent className="m-5 mb-3 mr-3">
              <Avatar
                src={briefcase}
                alt="briefcase icon"
                className="bg-[#F6EE063d]"
              />
              <h2 className="mb-2 mt-5 text-left text-lg font-semibold">
                Get Job
              </h2>
              <p className="text-left text-xs font-medium leading-normal text-slate-600">
                After applying, wait for some time, schedule an interview and if
                everything goes right, then get hired more quickly than
                traditional hiring methods.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="job_container px-12">
        <div className="job_header my-12 flex items-center justify-between">
          <div className="job_content">
            <h1 className="mb-2 text-left text-4xl font-bold">
              <span className="text-secondary">Latest and Top</span> Job
              Openings
            </h1>
            <p className="text-left text-xs font-semibold leading-loose text-slate-700">
              Discover the fresh job openings from the giant firms in which you
              might want to apply <br />
              and take a chance to get hired by top fortune companies.
            </p>
          </div>
          <div className="job_button self-end">
            <MyButton
              className="mb-2 rounded-md p-0 text-xs font-bold"
              colored={true}
            >
              View All Jobs
            </MyButton>
          </div>
        </div>
        <div className="job_cards grid grid-cols-3 items-center justify-around gap-4">
          <JobCard content={content} />
          <JobCard content={content} />
          <JobCard content={content} />
          <JobCard content={content} />
          <JobCard content={content} />
          <JobCard content={content} />
        </div>
      </div>
      <div className="offers_container my-28 px-12">
        <div className="offer_title mb-12 w-[45%] text-left">
          <h2 className="mb-3  text-4xl font-bold capitalize">what we offer</h2>
          <p className="text-xs font-semibold leading-loose text-slate-700">
            Job Portal is the right platform for you to get various job
            recommendations, get career counseling, and find your ideal job
            profile.
          </p>
        </div>
        <div className="offers grid grid-cols-3 gap-5 ">
          <div className="offer rounded-md text-left">
            <img
              src={jobImg}
              alt="job recommendation image"
              className="aspect-5-3 w-full rounded-md"
            />
            <div className="text relative pb-1 pl-3 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[3px] before:rounded-full before:bg-secondary">
              <h3 className="my-3 text-lg font-bold capitalize">
                job recommendation
              </h3>
              <p className="text-xs font-medium text-slate-600">
                Set your job preferences and get countless of your best-fit job
                recommendations.
              </p>
            </div>
          </div>
          <div className="offer rounded-md">
            <img
              src={projectProfileImg}
              alt="people doing project"
              className="aspect-5-3 w-full rounded-md"
            />
            <div className="text relative pb-1 pl-3 text-left before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[3px] before:rounded-full before:bg-secondary">
              <h3 className="my-3 text-lg font-bold capitalize">
                create & build profile
              </h3>
              <p className="text-xs font-medium text-slate-600">
                Set your job preferences and get countless of your best-fit job
                recommendations.
              </p>
            </div>
          </div>
          <div className="offer rounded-md">
            <img
              src={careerImg}
              alt="applying for a job"
              className="aspect-5-3 w-full rounded-md"
            />
            <div className="text relative pb-1 pl-3 text-left before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[3px] before:rounded-full before:bg-secondary">
              <h3 className="my-3 text-lg font-bold capitalize">
                career development
              </h3>
              <p className="text-xs font-medium text-slate-600">
                Set your job preferences and get countless of your best-fit job
                recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials_container">
        <div className="testimonials_header text-center"></div>
        <div className="testimonials"></div>
      </div>
    </div>
  );
};

export default Home;
