import { useRecoilValue } from "recoil";
import { userState } from "../utils/states";
import dashboardImg from "../assets/dashboard_illustration.svg"
import { FaHandshakeSimple, FaBriefcase } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import DataTable from "./table/DataTable";
import { applicantColumns } from "./table/column/applicantColumns";
import { postColumns } from "./table/column/postColumns";

const applicants = [
  {
    id: 1,
    name: "Makbel Hailu",
    education: "BSc in Software Engineering",
    address: "Dire Dawa, Ethiopia",
    status: "accepted",
  },
  {
    id: 2,
    name: "Abebe Kebede",
    education: "BSc in Computer Science",
    address: "Addis Ababa, Ethiopia",
    status: "interview",
  },
  {
    id: 3,
    name: "Sara Mohammed",
    education: "BSc in Information Technology",
    address: "Dire Dawa, Ethiopia",
    status: "pending",
  },
  {
    id: 4,
    name: "Daniel Tesfaye",
    education: "BSc in Software Engineering",
    address: "Hawassa, Ethiopia",
    status: "accepted",
  },
];

const posts = [
  {
    "jobName": "Software Engineer",
    "date": "2025-10-15"
  },
  {
    "jobName": "Product Manager",
    "date": "2025-10-16"
  },
  {
    "jobName": "Data Scientist",
    "date": "2025-10-17"
  },
  {
    "jobName": "DevOps Engineer",
    "date": "2025-10-18"
  }
]

const DashboardCompany = () => {
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
            <h1 className="whitespace-pre-line font-black text-4xl break-words leading-normal">Looking to post jobs and <br /> Find the perfect employee?</h1>
          </div>
          <div className="">
            <p className="text-sm font-semibold">Post job listings easily and connect with top talent to find the ideal candidate for your company.</p>
            <Link to="/post-job" className="mt-5 inline-block">
              <button className="px-8 py-3 font-black text-secondary hover:text-primary hover:bg-secondary-100 border-2 bg-white rounded-xl">Post Job</button>
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
            <p className="text-gray-600 font-medium text-sm">Total Posts</p>
          </div>
          </CardContent>
        </Card>

        <Card
          sx={{ width: 300, maxWidth: 300,  borderRadius: 3, boxShadow: 3 }}
          className=""
        >
          <CardContent className="mx-6 my-6 flex items-center justify-start gap-6">
             <div className="bg-yellow-100 p-4 rounded-full ">
            <FaUserFriends size={28} className="text-yellow-400" />
          </div>
          <div className="">
            <h1 className="text-3xl font-bold">33</h1>
            <p className="text-gray-600 font-medium text-sm">Total Applicants</p>
          </div>
          </CardContent>
        </Card>
        
        <Card
          sx={{ width: 300, maxWidth: 300, borderRadius: 3, boxShadow: 3 }}
          className=""
        >
          <CardContent className="mx-6 my-6  flex items-center justify-start gap-6">
             <div className="bg-greenish-100 p-4 rounded-full ">
            <FaHandshakeSimple size={30} className="text-greenish" />
          </div>
          <div className="">
            <h1 className="text-3xl font-bold">6</h1>
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
            <p className="text-gray-600 font-medium text-sm">Total Interviews</p>
          </div>
          </CardContent>
        </Card>
      </section>

      <section className="w-full flex gap-4 mt-4">
        <div className="flex-1">
          <Card
            sx={{ width: 850, maxWidth: 850, borderRadius: 3, boxShadow: 3 }}
            className=""
          >
            <CardContent className=" flex items-center justify-start gap-6">
              <DataTable
        title="Applicants"
        data={applicants}
        columns={applicantColumns}
        searchPlaceholder="Search applicants..."
        pageSize={7}
      />
              
              
            </CardContent>
          </Card>
        </div>
        <div className="flex-1">
          <Card
            sx={{maxWidth: 750, borderRadius: 3, boxShadow: 3 }}
            className=""
          >
            <CardContent className=" flex items-center justify-start gap-6">
              <DataTable
        title="Posts"
        data={posts}
        columns={postColumns}
        searchPlaceholder="Search posts..."
        pageSize={7}
      />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default DashboardCompany;
