import { useState, useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";
import axios from "axios";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import { autoResize, api } from "../utils/functions";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { userState } from "../utils/states";

import { useRecoilValue } from "recoil";

import "ldrs/ring";

const ApplicationForm = () => {
  const { user } = useRecoilValue(userState);
  const [isSending, setIsSending] = useState(false);
  const textareaRef = useRef(null);
  const { id } = useParams();
  const searchParams = new URLSearchParams(useLocation().search).entries();
  const { title, salary, edit } = Object.fromEntries(searchParams);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    education: "",
    resume: null,
    coverLetter: "",
    linkedin: "",
    portfolio: "",
    jobId: id,
    userId: user["id"],
  });

  useEffect(() => {
    setFormData({ ...formData, userId: user["id"] });
  }, [user]);

  useEffect(() => {
    autoResize(textareaRef);
  }, [formData.coverLetter]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    console.log("submitting has been started");
    e.preventDefault();
    setIsSending(true);

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    console.log("formData:", data);

    api
      .post("/application", data)
      .then((res) => {
        setIsSending(false);
        if (res.data.status) {
          navigate("/applications");
          console.log("application: ", res.data.app);
        } else {
          console.error(res.data.error);
        }
      })
      .catch((err) => {
        console.dir(err);
        setIsSending(false);
      });
  };

  return (
    <>
      <div className="header my-8 w-full text-center">
        <h1 className="text-4xl font-bold">
          Application <span className="text-secondary">Form</span>
        </h1>
      </div>
      <Card
        sx={{ borderRadius: 4, boxShadow: 5 }}
        className="mx-auto my-6 max-w-5xl p-4"
      >
        <CardContent>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <section className="mb-4">
              <h2 className="mb-2 text-xl font-bold">Job Information</h2>
              <ul className="mb-2 grid grid-cols-1 gap-3 font-medium sm:grid-cols-2">
                <div className="">
                  Job Title
                  <li className="w-full rounded-lg border-2 border-gray-400 bg-primary p-2 text-sm text-gray-700">
                    {title}
                  </li>
                </div>
                <div className="">
                  Salary
                  <li className="w-full rounded-lg border-2 border-gray-400 bg-primary p-2 text-sm text-gray-700">
                    ${salary}
                  </li>
                </div>
              </ul>
            </section>

            <section className="mb-4">
              <h2 className="mb-2 text-xl font-bold">Personal Information</h2>
              <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                <label
                  htmlFor="fullName"
                  className="box mb-2 block w-fit font-medium"
                >
                  Full Name
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-gray-400 bg-primary p-2 text-sm"
                    required
                    placeholder="Mark Hall"
                  />
                </label>
                <label htmlFor="email" className="box mb-2 block font-medium">
                  Email Address
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-gray-400 bg-primary p-2 text-sm"
                    required
                    placeholder="email@example.com"
                  />
                </label>
              </div>
              <div className="mb-2 flex w-full flex-wrap items-center justify-between gap-3">
                <label htmlFor="phone" className="box mb-2 block font-medium">
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-gray-400 bg-primary p-2 text-sm"
                    required
                    placeholder="+2519000000"
                  />
                </label>
                <label htmlFor="address" className="box mb-2 block font-medium">
                  Address
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-gray-400 bg-primary p-2 text-sm"
                    required
                    placeholder="Addis Ababa, Ethiopia"
                  />
                </label>
              </div>
              <div className="mb-2 flex w-full flex-wrap items-center justify-between gap-3">
                <label htmlFor="gender" className="box mb-2 block font-medium">
                  Gender
                  <select
                    name="gender"
                    value={formData.gender}
                    id="gender"
                    onChange={handleChange}
                    required
                    className=" w-full appearance-none rounded-lg border-2 border-gray-400 bg-primary p-2 text-sm focus:border"
                  >
                    <option value="" className="hidden" defaultChecked>
                      ---- Select ----
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </label>
                <label
                  htmlFor="education"
                  className="box mb-2 block font-medium"
                >
                  Level of Education
                  <input
                    type="text"
                    name="education"
                    id="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-gray-400 bg-primary p-2 text-sm"
                    required
                    placeholder="Bachelor degree in software engineering"
                  />
                </label>
              </div>
            </section>
            <section className="mb-4">
              <h2 className="mb-2 text-xl font-bold">Resume/CV</h2>
              <div className="resume flex w-fit max-w-[500px] items-center justify-start gap-3 rounded-xl border-2 border-gray-400 ">
                <label
                  className="resume-btn btn-primary w-fit cursor-pointer rounded-lg text-center text-xs sm:text-base"
                  htmlFor="file-upload"
                >
                  Upload File
                </label>
                {formData.resume && (
                  <p className="ml-2  max-w-48 overflow-hidden text-ellipsis text-nowrap">
                    {formData.resume.name}
                  </p>
                )}
                {formData.resume && (
                  <FaXmark
                    onClick={() => {
                      setFormData({ ...formData, resume: null });
                      document.getElementById("file-upload").value = null;
                    }}
                    className="mr-2 cursor-pointer text-xl text-red-700 hover:scale-125"
                  />
                )}
                <input
                  id="file-upload"
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="hidden"
                />
              </div>
            </section>

            <section className="mb-4">
              <label htmlFor="coverLetter" className="mb-4 block font-medium">
                Cover Letter
                <textarea
                  ref={textareaRef}
                  name="coverLetter"
                  id="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className="scrollbar-none w-full rounded-lg border-2 border-gray-400 bg-primary p-2 text-sm"
                  rows="5"
                  required
                />
              </label>
            </section>

            <section className="mb-4">
              <h2 className="mb-2 text-xl font-bold">Additional Information</h2>
              <label htmlFor="linkedin" className="mb-2 block font-medium">
                LinkedIn Profile
                <input
                  type="url"
                  name="linkedin"
                  id="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://www.linkedin.com/in/example-user"
                  className="w-full rounded-lg border-2 border-gray-400 bg-primary p-2 text-sm"
                />
              </label>
              <label htmlFor="portfolio" className="mb-2 block font-medium">
                Portfolio/Website/Certificate
                <input
                  type="url"
                  name="portfolio"
                  id="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="https://www.example.com/"
                  className="w-full rounded-lg border-2 border-gray-400 bg-primary p-2 text-sm"
                />
              </label>
            </section>

            <button
              type="submit"
              className={`btn-primary ${isSending && "pb-0"} my-3 w-full cursor-pointer text-center disabled:border-secondary disabled:bg-secondary`}
              disabled={isSending}
            >
              {isSending ? (
                <l-ring
                  size="25"
                  stroke="3"
                  bg-opacity="0"
                  speed="2"
                  color="white"
                  className="m-0 p-0"
                ></l-ring>
              ) : (
                "Submit Application"
              )}
            </button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ApplicationForm;
