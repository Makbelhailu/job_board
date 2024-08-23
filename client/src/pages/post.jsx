import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Post = () => {
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
            <label htmlFor="title" className="ml-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              required
              className="w-full rounded-lg border-2 bg-primary px-5 py-2 text-sm focus:border"
            />
          </div>
          <div className="input_container flex w-full flex-col gap-y-1">
            <label htmlFor="sector" className="ml-1">
              Sector
            </label>
            <input
              type="text"
              name="sector"
              id="sector"
              required
              className="w-full rounded-lg border-2 bg-primary px-5 py-2 text-sm focus:border"
            />
          </div>
        </div>

        <div className="mb-8 flex w-full flex-col items-center justify-center gap-x-24 gap-y-8 lg:flex-row">
          <div className="input_container flex w-full flex-col gap-y-1 ">
            <label htmlFor="type" className="ml-1">
              Type
            </label>
            <input
              type="text"
              name="type"
              id="type"
              required
              className="w-full rounded-lg border-2 border-blue-300 bg-primary px-5 py-2 text-sm focus:border"
            />
          </div>
          <div className="input_container flex w-full flex-col gap-y-1 ">
            <label htmlFor="experience" className="ml-1">
              Experience
            </label>
            <input
              type="text"
              name="experience"
              id="experience"
              required
              className="w-full rounded-lg border-2 border-blue-300 bg-primary px-5 py-2 text-sm focus:border"
            />
          </div>
        </div>
        <div className="mb-8 flex w-full flex-col items-center justify-center gap-x-24 gap-y-8 lg:flex-row">
          <div className="input_container flex w-full flex-col gap-y-1 ">
            <label htmlFor="type" className="ml-1">
              Type
            </label>
            <input
              type="text"
              name="type"
              id="type"
              required
              className="w-full rounded-lg border-2 border-blue-300 bg-primary px-5 py-2 text-sm focus:border"
            />
          </div>
          <div className="input_container flex w-full flex-col gap-y-1 ">
            <label htmlFor="experience" className="ml-1">
              Experience
            </label>
            <input
              type="text"
              name="experience"
              id="experience"
              required
              className="w-full rounded-lg border-2 border-blue-300 bg-primary px-5 py-2 text-sm focus:border"
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default Post;
