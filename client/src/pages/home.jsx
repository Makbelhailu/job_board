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
import Button from "./../components/button";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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
        <div className="description px-10 text-sm ">
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure <br /> and praising pain was born and I will give you a{" "}
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
      <div className="marquees relative my-20">
        <Marquee
          className="my-3"
          direction="right"
          delay="1"
          speed={30}
          pauseOnHover={true}
        >
          {marqueeContent.map((text, index) => {
            let i = index % 2 ? true : false;
            return <Button key={index} content={text} colored={i} />;
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
            return <Button key={index} content={text} colored={i} />;
          })}
        </Marquee>
      </div>
      <div className="about ">
        <div className="header">
          <h1 className="text-4xl font-bold">
            Get Hired in 4{" "}
            <span className="text-secondary">Quick Easy Steps</span>
          </h1>
          <p className="mt-4 text-xs opacity-70">
            The quicker and most effective way to get hired by the top firm
            working in <br />
            your career interest areas.
          </p>
        </div>
        <div className="cards mt-24 flex flex-wrap justify-around gap-y-5 px-5">
          <Card sx={{ maxWidth: 300, borderRadius: 3 }} className="xl:mt-10">
            <CardContent className="m-5  mb-3  mr-3">
              <Avatar src={user} alt="user icon" />
              <h2 className="mb-1 mt-3 text-left text-lg font-semibold">
                Create An Account
              </h2>
              <p className="text-left text-[11px] opacity-70">
                Signup for the job applicant profle, mention your
                qualifications, post experience, and expertise, and scope your
                interests, Vola! You're all set to find your dream jobs
              </p>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300, borderRadius: 3 }} className="xl:mb-10">
            <CardContent className="m-5  mb-3  mr-3">
              <Avatar src={search} alt="search icon" />
              <h2 className="mb-1 mt-3 text-left text-lg font-semibold">
                Search Job
              </h2>
              <p className="text-left text-[11px] opacity-70">
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
              <h2 className="mb-1 mt-3 text-left text-lg font-semibold">
                Upload CV/ Resume
              </h2>
              <p className="text-left text-[11px] opacity-70">
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
              <h2 className="mb-1 mt-3 text-left text-lg font-semibold">
                Get Job
              </h2>
              <p className="text-left text-[11px] opacity-70">
                After applying, wait for some time, schedule an interview and if
                everything goes right, then get hired more quickly than
                traditional hiring methods.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
