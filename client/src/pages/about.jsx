import { Card, CardContent } from "@mui/material";
import aboutBg from "../assets/wavey_bg-1.png";
import officeMan from "../assets/office_man.png";
import officeMan1 from "../assets/offic_man_1.png";
import { FaClipboardList, FaCheckCircle } from "react-icons/fa";
import { FaBriefcase, FaPen, FaBookmark } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";

const About = () => {
  return (
    <div className="pt-8">
      <div className="header my-10 w-full text-center">
        <h1 className="text-4xl font-bold">
          About <span className="text-secondary">Us</span>
        </h1>
      </div>
      <p className="mx-auto w-[75%] text-center text-sm md:w-[60%]">
        Welcome to our job board website, a comprehensive platform designed to
        connect talented professionals with leading employers across diverse
        industries. We understand that the job search process can be challenging
        and time-consuming, and our goal is to make it as seamless and efficient
        as possible.
      </p>
      <Card className="!mx-auto my-16 !w-[90%] !rounded-xl border !bg-primary py-3 !shadow-xl">
        <CardContent>
          <div className="grid w-full grid-cols-2 gap-y-10 sm:grid-cols-4">
            <div className="grid place-items-center">
              <h2 className="w-full text-center text-3xl font-bold">+100</h2>
              <p className="ml-2 w-full text-center text-xs font-medium">
                Jobs
              </p>
            </div>
            <div className="grid place-items-center">
              <h2 className="w-full text-center text-3xl font-bold">+120</h2>
              <p className="ml-2 w-full text-center text-xs font-medium">
                Applications
              </p>
            </div>
            <div className="grid place-items-center">
              <h2 className="w-full text-center text-3xl font-bold">+80</h2>
              <p className="ml-2 w-full text-center text-xs font-medium">
                Companies
              </p>
            </div>
            <div className="grid place-items-center">
              <h2 className="w-full text-center text-3xl font-bold">+30</h2>
              <p className="ml-2 w-full text-center text-xs font-medium">
                Accepts
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className=" my-12 h-[600px] w-full py-16 md:px-16 lg:px-32">
        <img
          src={aboutBg}
          alt="about background"
          className="absolute left-0 h-[600px] min-w-[100vw]"
        />
        <div className="mt-20 grid w-full grid-cols-1 items-center justify-center gap-x-12 gap-y-8 md:mt-28 md:grid-cols-2 xl:mt-12 xl:gap-x-0">
          <img
            src={officeMan}
            alt="office man"
            className="hidden size-64 self-center md:block lg:size-80 xl:size-[400px]"
          />
          <div className="mt-8 space-y-3 px-8 text-center sm:px-24 md:px-0 md:text-start xl:pr-16">
            <h2 className="text-2xl font-bold">
              Our <span className="text-secondary">Mission</span>
            </h2>
            <h3 className="text-lg font-semibold">
              Connecting Talent with Opportunity for Fulfilling Careers and
              Strong Teams
            </h3>
            <p className="text-sm">
              Our mission is to empower job seekers to find fulfilling careers
              and support employers in building strong, successful teams. We
              strive to bridge the gap between talent and opportunity, providing
              a space where individuals can discover meaningful job
              opportunities and companies can find the perfect candidates to
              meet their needs.
            </p>
          </div>
        </div>
      </div>
      <div className="my-24 mt-32">
        <div className="title my-12 w-full text-center">
          <h2 className="text-3xl font-bold">
            What we <span className="text-secondary">Offer</span>
          </h2>
        </div>
        <div className="my-20 grid grid-cols-3">
          <div className=" col-span-3 grid grid-cols-1 gap-x-16 gap-y-10 px-4  sm:grid-cols-2 sm:px-2 lg:grid-cols-3 lg:grid-rows-2 lg:px-6 xl:col-span-2 xl:grid-cols-2 xl:grid-rows-3 xl:px-16 2xl:px-20">
            <div className="flex">
              <div className="mx-3 mt-1 flex size-11 items-center justify-center rounded-[5px] bg-secondary p-4">
                <FaClipboardList className="!text-3xl text-white" />
              </div>
              <div className="">
                <p className="mb-2 text-sm font-medium">
                  Extensive Job Listings
                </p>
                <p className="pr-8 text-xs sm:pr-3 md:pr-12 lg:pr-6">
                  Our platform provides a broad array of job opportunities
                  across various industries. Whether you&lsquo;re interested in
                  full-time, part-time, or remote positions, you&lsquo;ll find a
                  variety of listings that cater to different career levels and
                  areas of expertise.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mx-3 mt-1 flex size-11 items-center justify-center rounded-[5px] bg-secondary p-4 ">
                <FaCheckCircle className="text-white" />
              </div>
              <div className="">
                <p className="mb-2 text-sm font-medium">
                  User-Friendly Interface
                </p>
                <p className="pr-8 text-xs sm:pr-3 md:pr-12 lg:pr-6">
                  Designed for ease of use, our website allows users to search
                  for jobs efficiently using keywords, location filters, and
                  industry categories. The responsive design ensures a smooth
                  experience on desktops, tablets, and smartphones.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mx-3 mt-1 flex size-11 items-center justify-center rounded-[5px] bg-secondary p-4 ">
                <FaBriefcase className="text-white" />
              </div>
              <div className="">
                <p className="mb-2 text-sm font-medium">
                  Job Details and Company Descriptions
                </p>
                <p className="pr-8 text-xs sm:pr-3 md:pr-12 lg:pr-6">
                 While we don't have dedicated company profiles, employers include descriptions about their company within the job postings. This feature helps job seekers understand the company culture, values, and specific job details directly from the listing.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mx-3 mt-1 flex size-11 items-center justify-center rounded-[5px] bg-secondary p-4 ">
                <FaPen className="text-white" />
              </div>
              <div className="">
                <p className="mb-2 text-sm font-medium">
                  Application and Post Editing
                </p>
                <p className="pr-8 text-xs sm:pr-3 md:pr-12 lg:pr-6">
                  Applicants can update their submitted applications to ensure that their information remains accurate and current. Employers also have the flexibility to edit their job postings, allowing for updates and adjustments as needed.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mx-3 mt-1 flex size-11 items-center justify-center rounded-[5px] bg-secondary p-4 ">
                <FaBookmark className="text-white " />
              </div>
              <div className="">
                <p className="mb-2 text-sm font-medium">
                  Career Resources
                </p>
                <p className="pr-8 text-xs sm:pr-3 md:pr-12 lg:pr-6">
                  While we currently don't offer a blog page, our platform provides essential resources for job seekers. We aim to support users with tools and information for resume building, interview preparation, and career development.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mx-3 mt-1 flex size-11 items-center justify-center rounded-[5px] bg-secondary p-4 ">
                <GiSandsOfTime className="text-lg text-white" />
              </div>
              <div className="">
                <p className="mb-2 text-sm font-medium">
                  Future Features
                </p>
                <p className="pr-8 text-xs sm:pr-3 md:pr-12 lg:pr-6">
                  We are committed to continuously improving our platform and have several exciting features in the pipeline. Upcoming enhancements include a job alert system to notify users of new opportunities, and a blog page featuring career advice, industry news, and job search tips and help center.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={officeMan1}
              alt="office man 2"
              className="hidden w-[420px] self-center xl:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
