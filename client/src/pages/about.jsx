import { Card, CardContent } from "@mui/material";
import aboutBg from "../assets/wavey_bg-1.png";
import officeMan from "../assets/office_man.png";
import officeMan1 from "../assets/offic_man_1.png";
import { FaClipboardList, FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-8">
      <div className="header my-10 w-full text-center">
        <h1 className="text-4xl font-bold">
          About <span className="text-secondary">Us</span>
        </h1>
      </div>
      <p className="mx-auto w-[70%] text-center text-sm">
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
                <p className="pr-3 text-xs md:pr-12">
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
                <p className="pr-3 text-xs md:pr-12">
                  Designed for ease of use, our website allows users to search
                  for jobs efficiently using keywords, location filters, and
                  industry categories. The responsive design ensures a smooth
                  experience on desktops, tablets, and smartphones.
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
                <p className="pr-3 text-xs md:pr-12">
                  Designed for ease of use, our website allows users to search
                  for jobs efficiently using keywords, location filters, and
                  industry categories. The responsive design ensures a smooth
                  experience on desktops, tablets, and smartphones.
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
                <p className="pr-3 text-xs md:pr-12">
                  Designed for ease of use, our website allows users to search
                  for jobs efficiently using keywords, location filters, and
                  industry categories. The responsive design ensures a smooth
                  experience on desktops, tablets, and smartphones.
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
                <p className="pr-3 text-xs md:pr-12">
                  Designed for ease of use, our website allows users to search
                  for jobs efficiently using keywords, location filters, and
                  industry categories. The responsive design ensures a smooth
                  experience on desktops, tablets, and smartphones.
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
                <p className="pr-3 text-xs md:pr-12">
                  Designed for ease of use, our website allows users to search
                  for jobs efficiently using keywords, location filters, and
                  industry categories. The responsive design ensures a smooth
                  experience on desktops, tablets, and smartphones.
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
