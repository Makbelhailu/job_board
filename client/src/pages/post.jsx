import { useRef, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { autoResize, api } from "../utils/functions";
import { useRecoilValue } from "recoil";
import { userState } from "../utils/states";
import { useNavigate } from "react-router-dom";
const Post = () => {
  const { user } = useRecoilValue(userState);
  const navigate = useNavigate();

  const discRef = useRef(null);
  const reqRef = useRef(null);
  const resRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    sector: "",
    type: "",
    experience: "",
    applicant: "Male & Female",
    price: null,
    interval: "",
    location: "",
    description: "",
    requirement: "",
    responsibility: "",
    deadline: "",
    link: "",
    companyId: user["id"],
  });

  useEffect(() => {
    setFormData({ ...formData, companyId: user["id"] });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      salary: formData.price
        ? `${formData.price}/${formData.interval}`
        : formData.interval,
      requirement: formData.requirement.split("\n").filter((req) => req !== ""),
      responsibility: formData.responsibility
        .split("\n")
        .filter((res) => res !== ""),
    };
    api
      .post("/jobs", data)
      .then((res) => {
        if (res.data.status) {
          navigate("/jobs");
        }
      })
      .catch((e) => {
        console.error("Error posting the job: ", e.response.data.error);
      });
  };

  useEffect(() => {
    autoResize(discRef);
    autoResize(reqRef);
    autoResize(resRef);
  }, [formData.description, formData.requirement, formData.responsibility]);

  return (
    <>
      <Card
        sx={{ maxWidth: "100%", borderRadius: 4, boxShadow: 8 }}
        className="card mt-20 min-h-[40rem] w-full border p-12"
      >
        <div className="header mb-12 w-full text-center">
          <h1 className="text-4xl font-bold">
            Post <span className="text-secondary">Form</span>
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-8 flex w-full flex-col items-center justify-center gap-x-16 gap-y-8 lg:flex-row">
            <div className="input_container flex w-full flex-col gap-y-1 ">
              <label htmlFor="title" className="ml-3">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                id="title"
                onChange={handleChange}
                required
                placeholder="Senior Web Developer"
                className="w-full rounded-lg border-2 border-gray-400 bg-primary px-5 py-2 text-sm focus:border"
              />
            </div>
            <div className="input_container flex w-full flex-col gap-y-1">
              <label htmlFor="sector" className="ml-3">
                Job Sector
              </label>
              <select
                name="sector"
                id="sector"
                value={formData.sector}
                onChange={handleChange}
                required
                className="w-full appearance-none rounded-lg border-2 border-gray-400 bg-primary px-5 py-2 text-sm focus:border"
              >
                <option value="" className="hidden">
                  ---- Select ----
                </option>
                <option value="it">Information Technology (IT)</option>
                <option value="healthcare">Healthcare and Medical</option>
                <option value="business">Business and Finance</option>
                <option value="education">Education and Training</option>
                <option value="sales">Sales and Marketing</option>
              </select>
            </div>
          </div>

          <div className="mb-8 flex w-full flex-col items-center justify-center gap-x-16 gap-y-8 lg:flex-row">
            <div className="input_container flex w-full flex-col gap-y-1 ">
              <label htmlFor="type" className="ml-3">
                Job Type
              </label>

              <select
                name="type"
                value={formData.type}
                id="type"
                onChange={handleChange}
                required
                className="w-full appearance-none rounded-lg border-2 border-gray-400 bg-primary px-5 py-2 text-sm focus:border"
              >
                <option value="" className="hidden">
                  ---- Select ----
                </option>
                <option value="FullTime">Full-time</option>
                <option value="FartTime">Part-time</option>
                <option value="Intern">Intern</option>
                <option value="Remote">Remote</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
            <div className="input_container flex w-full flex-col gap-y-1 ">
              <label htmlFor="experience" className="ml-3">
                Experience
              </label>
              <input
                type="number"
                name="experience"
                min={0}
                value={formData.experience}
                id="experience"
                onChange={handleChange}
                required
                placeholder="0"
                className="w-full rounded-lg border-2 border-gray-400 bg-primary px-5 py-2 text-sm focus:border"
              />
            </div>
          </div>
          <div className="mb-8 flex w-full flex-col items-center justify-center gap-x-16 gap-y-8 lg:flex-row">
            <div className="input_container flex w-full flex-col gap-y-1 ">
              <label htmlFor="applicant" className="ml-3">
                Applicant
              </label>

              <select
                name="applicant"
                value={formData.applicant}
                id="applicant"
                onChange={handleChange}
                required
                className="w-full appearance-none rounded-lg border-2 border-gray-400 bg-primary px-5 py-2 text-sm focus:border"
              >
                <option value="Male & Female" defaultChecked>
                  Both
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="input_container flex w-full flex-col gap-y-1 ">
              <label htmlFor="location" className="ml-3">
                Work Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                id="location"
                onChange={handleChange}
                required
                placeholder="Addis Ababa, Ethiopia"
                className="w-full rounded-lg border-2 border-gray-400 bg-primary px-5 py-2 text-sm focus:border"
              />
            </div>
          </div>
          <h3 className="mb-3 ml-3">Salary</h3>
          <div className="mb-8 flex w-full flex-col items-center justify-center gap-x-16 gap-y-8 lg:flex-row">
            <div className="input_container flex w-full flex-col gap-y-1 ">
              <label htmlFor="price" className="ml-5 text-xs font-medium">
                Price
              </label>
              <input
                type="test"
                name="price"
                value={formData.price}
                id="price"
                onChange={handleChange}
                placeholder="9999 ETB/USD"
                className="w-full rounded-lg border-2 border-gray-400 bg-primary px-5 py-2 text-sm focus:border"
              />
            </div>
            <div className="input_container flex w-full flex-col gap-y-1 ">
              <label htmlFor="interval" className="ml-5 text-xs font-medium">
                Interval
              </label>
              <select
                type="text"
                name="interval"
                value={formData.interval}
                id="interval"
                onChange={handleChange}
                required
                className="w-full appearance-none rounded-lg border-2 border-gray-400 bg-primary px-5 py-2 text-sm focus:border"
              >
                <option value="" className="hidden" defaultChecked>
                  ---- Select ----
                </option>
                <option value="Hour">Hourly</option>
                <option value="Month">Monthly</option>
                <option value="Fixed">Fixed</option>
                <option value="Negotiable">Negotiable</option>
              </select>
            </div>
          </div>

          <div className="mb-8 flex w-full flex-col items-center justify-center gap-x-16 gap-y-8 lg:flex-row">
            <div className="input_container flex w-full flex-col gap-y-1">
              <label htmlFor="sector" className="ml-3">
                Vacancy
              </label>
              <input
                type="number"
                name="vacancy"
                value={formData.vacancy}
                id="vacancy"
                onChange={handleChange}
                min={1}
                placeholder="1"
                className="w-full rounded-lg border-2 border-gray-400 bg-primary px-5 py-2 text-sm focus:border"
              />
            </div>
            <div className="input_container flex w-full flex-col gap-y-1 ">
              <label htmlFor="title" className="ml-3">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                id="deadline"
                onChange={handleChange}
                required
                className="w-full rounded-lg border-2 border-gray-400 bg-primary px-5 py-2 text-sm focus:border"
              />
            </div>
          </div>
          <div className="input_container mb-8 flex w-full flex-col gap-y-3">
            <label htmlFor="sector" className="ml-3">
              Additional Link (Google form)
            </label>
            <input
              type="link"
              name="link"
              value={formData.link}
              id="link"
              onChange={handleChange}
              placeholder="https://example.com"
              className="w-full rounded-lg border-2 border-gray-400 bg-primary px-5 py-2 text-sm focus:border"
            />
          </div>

          <div className="input_container mb-8 flex w-full flex-col gap-y-3">
            <label htmlFor="experience" className="ml-8 w-full text-start">
              Description
            </label>
            <textarea
              ref={discRef}
              value={formData.description}
              name="description"
              id="description"
              onChange={handleChange}
              className="scrollbar-none w-[95%] resize-none self-center justify-self-center rounded-lg border-2 border-gray-400 bg-primary px-5 py-2 text-sm focus:border"
              rows="5"
            />
          </div>
          <div className="input_container mb-8 flex w-full flex-col gap-y-3">
            <label
              htmlFor="requirement"
              className="ml-8 block w-full text-start"
            >
              Requirements
            </label>
            <textarea
              ref={reqRef}
              value={formData.requirement}
              name="requirement"
              id="requirement"
              onChange={handleChange}
              className="scrollbar-none w-[95%] resize-none self-center justify-self-center rounded-lg border-2 border-gray-400 bg-primary px-5 py-2 text-sm focus:border"
              rows="5"
              placeholder="Bachelor's degree in relevant field
3+ years of experience in a similar role
Proficiency in industry-standard software
"
            />
          </div>
          <div className="input_container mb-8 flex w-full flex-col gap-y-3">
            <label
              htmlFor="responsibility"
              className="ml-8 block w-full text-start"
            >
              Responsibilities
            </label>
            <textarea
              ref={resRef}
              value={formData.responsibility}
              name="responsibility"
              id="responsibility"
              onChange={handleChange}
              className="scrollbar-none w-[95%] resize-none self-center justify-self-center rounded-lg border-2 border-gray-400 bg-primary px-5 py-2 text-sm focus:border"
              rows="5"
              placeholder="Develop and implement strategies to meet department goals
Collaborate with cross-functional teams on various projects
Manage and prioritize multiple tasks and deadlines
"
            />
          </div>

          <button type="submit" className="btn-primary my-3 w-full">
            Submit Job
          </button>
        </form>
      </Card>
    </>
  );
};

export default Post;
