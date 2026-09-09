import { useRecoilValue } from "recoil";
import { userState } from "../utils/states";
import dashboardImg from "../assets/dashboard_illustration.svg"
import { FaHandshakeSimple, FaBriefcase } from "react-icons/fa6";
import { FaThumbsDown } from "react-icons/fa6";
import { IoCalendar } from "react-icons/io5";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import DataTable from "./table/DataTable";
import { applicationColumns } from "./table/column/applicationColumns";

const applications = [
  {
    _id: 1,
    title: "John Doe",
    type: "Full-Time",
    salary: "1000 ETB/Hour",
    experience: "5 years",
    location: "Dire Dawa, Ethiopia",
    status: "accepted",
  },
  {
    _id: 2,
    title: "Abebe Kebede",
    type: "Remote",
    salary: "412,000 ETB/year",
    experience: "BSc in software engineering",
    location: "Addis Ababa, Ethiopia",
    status: "interview",
  },
  {
    _id: 3,
    title: "Sara Mohammed",
    type: "Part-Time",
    salary: "11000 ETB/Month",
    experience: "BSc in computer science",
    location: "Dire Dawa, Ethiopia",
    status: "pending",
  },
  {
    _id: 4,
    title: "Daniel Tesfaye",
    type: "Contract",
    salary: "1300 USD",
    experience: "2 years in software engineering",
    location: "Hawassa, Ethiopia",
    status: "accepted",
  },
];



const DashboardFreelancer = () => {
  const userInfo = useRecoilValue(userState)
  return (
    <div>
      <section className="px-2 mb-2">
        <p className="font-bold text-sm">Hi, {userInfo.user.username}</p>
        <h1 className="text-2xl font-bold">Welcome Back</h1>
      </section>
      <section className="w-full h-auto bg-secondary text-white px-12 py-8 rounded-3xl flex justify-between items-start">
        <div className="space-y-12 w-4/5 pt-3">
          <div className="">
            <h1 className="whitespace-pre-line font-black text-4xl break-words leading-normal">Looking for Gigs? <br /> Find jobs that suits your skills.</h1>
          </div>
          <div className="">
            <p className="text-sm font-semibold">Discover your next career opportunity. Explore thousands of jobs from employers looking for talented people like you.</p>
            <Link to="/post-job" className="mt-5 inline-block">
              <button className="px-8 py-3 font-black text-secondary hover:text-primary hover:bg-secondary-100 border-2 bg-white rounded-xl">Find Job</button>
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={dashboardImg} alt="Dashboard Illustration" className=""/>
        </div>
      </section>
      <section className="w-full flex items-center justify-between py-6 px-4">
        <Card
          sx={{ width: 300, maxWidth: 300,  borderRadius: 3, boxShadow: 3 }}
          className=""
        >
          <CardContent className="mx-6 my-6  flex items-center justify-start gap-6">
             <div className="bg-secondary-100 p-4 rounded-full ">
            <FaBriefcase size={28} className="text-secondary" />
          </div>
          <div className="">
            <h1 className="text-3xl font-bold">12</h1>
            <p className="text-gray-600 font-medium text-sm">Total Applications</p>
          </div>
          </CardContent>
        </Card>

        <Card
          sx={{ width: 300, maxWidth: 300,  borderRadius: 3, boxShadow: 3 }}
          className=""
        >
          <CardContent className="mx-6 my-6 flex items-center justify-start gap-6">
             <div className="bg-greenish-100 p-4 rounded-full ">
            <FaHandshakeSimple size={30} className="text-greenish" />
          </div>
          <div className="">
            <h1 className="text-3xl font-bold">33</h1>
            <p className="text-gray-600 font-medium text-sm">Total Accepted</p>
          </div>
          </CardContent>
        </Card>
        
        <Card
          sx={{ width: 300, maxWidth: 300, borderRadius: 3, boxShadow: 3 }}
          className=""
        >
          <CardContent className="mx-6 my-6  flex items-center justify-start gap-6">
             <div className="bg-blueish-100 p-4 rounded-full ">
            <IoCalendar size={30} className="text-blueish" />
          </div>
          <div className="">
            <h1 className="text-3xl font-bold">10</h1>
            <p className="text-gray-600 font-medium text-sm">Interviews</p>
          </div>
          </CardContent>
        </Card>

        <Card
          sx={{ width: 300, maxWidth: 300, borderRadius: 3, boxShadow: 3 }}
          className=""
        >
          <CardContent className="mx-6 my-6  flex items-center justify-start gap-6">
             <div className="bg-red-100 p-4 rounded-full ">
            <FaThumbsDown size={30} className="text-red-500" />
          </div>
          <div className="">
            <h1 className="text-3xl font-bold">6</h1>
            <p className="text-gray-600 font-medium text-sm">Total Accepted</p>
          </div>
          </CardContent>
        </Card>
      </section>

      {/* table */}

      <section className="w-full flex items-center justify-center mt-4">
        
          <Card
            sx={{ width: "100%", maxWidth: "100%", borderRadius: 3, boxShadow: 3 }}
            className=""
          >
            <CardContent className=" flex items-center justify-start gap-6">
              <DataTable
        title="Applicants"
        data={applications}
        columns={applicationColumns}
        searchPlaceholder="Search applicants..."
        pageSize={7}
      />
              
              
            </CardContent>
          </Card>
        
        
      </section>
    </div>
  );
};

export default DashboardFreelancer;
