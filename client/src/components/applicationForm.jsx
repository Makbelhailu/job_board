import React, { useState, useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

const ApplicationForm = () => {
  const { id } = useParams();
  const title = new URLSearchParams(useLocation().search).get("title") || "";
  console.log(title);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    resume: null,
    coverLetter: "",
    linkedin: "",
    portfolio: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    axios.post("", data);
  };

  return (
    <>
      <div className="header my-8 w-full text-center">
        <h1 className="text-4xl font-bold">
          Application <span className="text-secondary">Form</span>
        </h1>
      </div>
      <form
        className="mx-auto my-6 max-w-2xl p-4"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <section className="mb-4">
          <h2 className="mb-2 text-xl font-bold">Job Information</h2>
          <label className="mb-2 block">
            Job Title
            <input
              type="text"
              name="fullName"
              value={title}
              className="w-full rounded-lg border-2 border-gray-400 bg-primary p-2 text-gray-700"
              required
              disabled
            />
          </label>
        </section>

        <section className="mb-4">
          <h2 className="mb-2 text-xl font-bold">Personal Information</h2>
          <label className="mb-2 block">
            Full Name
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-gray-400 bg-primary p-2"
              required
            />
          </label>
          <label className="mb-2 block">
            Email Address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-gray-400 bg-primary p-2"
              required
            />
          </label>
          <label className="mb-2 block">
            Phone Number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-gray-400 bg-primary p-2"
              required
            />
          </label>
          <label className="mb-4 block">
            Address
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-gray-400 bg-primary p-2"
              required
            />
          </label>
        </section>
        <section className="mb-4">
          <h2 className="mb-2 text-xl font-bold">Resume/CV</h2>
          <div className="flex items-center justify-start gap-3">
            <label
              className="btn-primary  cursor-pointer rounded-lg"
              htmlFor="file-upload"
            >
              Upload File
            </label>
            {formData.resume && <p>{formData.resume.name}</p>}
            {formData.resume && (
              <FaXmark
                onClick={() => {
                  setFormData({ ...formData, resume: null });
                  document.getElementById("file-upload").value = null;
                }}
                className="cursor-pointer text-xl text-red-700 hover:scale-125"
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
          <h2 className="mb-2 text-xl font-bold">Cover Letter</h2>
          <label className="mb-4 block">
            Cover Letter
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-gray-400 bg-primary p-2"
              rows="5"
            />
          </label>
        </section>

        <section className="mb-4">
          <h2 className="mb-2 text-xl font-bold">Additional Information</h2>
          <label className="mb-2 block">
            LinkedIn Profile
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-gray-400 bg-primary p-2"
            />
          </label>
          <label className="mb-2 block">
            Portfolio/Website/Certificate
            <input
              type="url"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-gray-400 bg-primary p-2"
            />
          </label>
        </section>

        <button type="submit" className="btn-primary my-3 w-full">
          Submit Application
        </button>
      </form>
    </>
  );
};

export default ApplicationForm;
