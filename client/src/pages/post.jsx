import { useRef, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { autoResize } from "../utils/functions";

const Post = () => {
  const textareaRef = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    sector: "",
    type: "",
    experience: "",
    salary: { price: null, interval: "" },
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => autoResize(textareaRef), [formData.description]);

  return (
    <>
      <div className="header mb-8 mt-16 w-full text-center">
        <h1 className="text-4xl font-bold">
          Post <span className="text-secondary">Form</span>
        </h1>
      </div>
      <Card
        sx={{ maxWidth: "100%", borderRadius: 4, boxShadow: 8 }}
        className="card min-h-[40rem] w-full border p-12"
      >
        <div className="mb-8 flex w-full flex-col items-center justify-center gap-x-24 gap-y-8 lg:flex-row">
          <div className="input_container flex w-full flex-col gap-y-1 ">
            <label htmlFor="title" className="ml-3">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              required
              className="w-full rounded-lg border-2 border-blue-300 bg-primary px-5 py-2 text-sm focus:border"
            />
          </div>
          <div className="input_container flex w-full flex-col gap-y-1">
            <label htmlFor="sector" className="ml-3">
              Sector
            </label>
            <input
              type="text"
              name="sector"
              id="sector"
              onChange={handleChange}
              required
              className="w-full rounded-lg border-2 border-blue-300 bg-primary px-5 py-2 text-sm focus:border"
            />
          </div>
        </div>

        <div className="mb-8 flex w-full flex-col items-center justify-center gap-x-24 gap-y-8 lg:flex-row">
          <div className="input_container flex w-full flex-col gap-y-1 ">
            <label htmlFor="type" className="ml-3">
              Type
            </label>
            <input
              type="text"
              name="type"
              id="type"
              onChange={handleChange}
              required
              className="w-full rounded-lg border-2 border-blue-300 bg-primary px-5 py-2 text-sm focus:border"
            />
          </div>
          <div className="input_container flex w-full flex-col gap-y-1 ">
            <label htmlFor="experience" className="ml-3">
              Experience
            </label>
            <input
              type="text"
              name="experience"
              id="experience"
              onChange={handleChange}
              required
              className="w-full rounded-lg border-2 border-blue-300 bg-primary px-5 py-2 text-sm focus:border"
            />
          </div>
        </div>
        <div className="mb-8 flex w-full flex-col items-center justify-center gap-x-24 gap-y-8 lg:flex-row">
          <div className="input_container flex w-full flex-col gap-y-1 ">
            <label htmlFor="applicant" className="ml-3">
              Applicant
            </label>
            <input
              type="number"
              name="applicant"
              id="applicant"
              min={1}
              onChange={handleChange}
              required
              className="w-full rounded-lg border-2 border-blue-300 bg-primary px-5 py-2 text-sm focus:border"
            />
          </div>
          <div className="input_container flex w-full flex-col gap-y-1 ">
            <label htmlFor="location" className="ml-3">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              onChange={handleChange}
              required
              className="w-full rounded-lg border-2 border-blue-300 bg-primary px-5 py-2 text-sm focus:border"
            />
          </div>
        </div>
        <h3 className="mb-3 ml-3">Salary</h3>
        <div className="mb-8 flex w-full flex-col items-center justify-center gap-x-24 gap-y-8 lg:flex-row">
          <div className="input_container flex w-full flex-col gap-y-1 ">
            <label htmlFor="price" className="ml-5 text-xs font-medium">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              min={0}
              onChange={handleChange}
              required
              className="w-full rounded-lg border-2 border-blue-300 bg-primary px-5 py-2 text-sm focus:border"
            />
          </div>
          <div className="input_container flex w-full flex-col gap-y-1 ">
            <label htmlFor="interval" className="ml-5 text-xs font-medium">
              Interval
            </label>
            <select
              type="text"
              name="interval"
              id="interval"
              onChange={handleChange}
              required
              className="w-full appearance-none rounded-lg border-2 border-blue-300 bg-primary px-5 py-2 text-sm focus:border"
            >
              <option value="" className="hidden" defaultChecked>
                ---- Select ----
              </option>
              <option value="Hour">Hour</option>
              <option value="Month">Month</option>
              <option value="Fixed">Fixed</option>
              <option value="contractual">contractual</option>
            </select>
          </div>
        </div>
        <div className="input_container flex w-full flex-col gap-y-1">
          <label htmlFor="experience" className="ml-10 w-full text-start">
            Description
          </label>
          <textarea
            ref={textareaRef}
            value={formData.description}
            name="description"
            id="description"
            onChange={handleChange}
            className="scrollbar-none w-[95%] resize-none self-center justify-self-center rounded-lg border-2 border-blue-300 bg-primary px-5 py-2 text-sm focus:border"
            rows="5"
          />
        </div>
      </Card>
    </>
  );
};

export default Post;
