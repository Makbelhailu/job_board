import React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

import { Link } from "react-router-dom";
import MyButton from "./button";
const ApplicationCard = ({ content, btn }) => {
  content = {
    _id: "2f4rrf478hgg",
    profile:
      "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png",
    title: "Full Stack Developer",
    type: "FullTime",
    vacancy: 2,
    salary: "120,000/Year",
    experience: 2,
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, animi? Temporibus ab asperiores enim perferendis! Quibusdam similique delectus omnis laborum voluptate hic at suscipit. Hic vel non voluptatibus alias aspernatur.",
    requirements: [
      "Sooner settle add put you sudden him.",
      "To sorry world an at do spoil along.",
      "Incommode he depending do frankness remainder to. Edward day",
      "soon. It merely waited do unable.",
    ],
  };
  btn = true;

  return (
    <div className="container mt-6 px-24 py-6">
      <Card
        sx={{ maxWidth: "100%", borderRadius: 4, boxShadow: 3 }}
        className="card min-h-[40rem] w-full border p-12"
      >
        <CardContent>
          <div className="header flex items-center justify-between">
            <div className="title flex items-start gap-8">
              <Avatar
                src={content.profile}
                alt="user icon"
                sx={{ width: 60, height: 60 }}
              >
                H
              </Avatar>

              <div className="texts">
                <h2 className="text-3xl font-bold">{content.title}</h2>
                <div className="info my-3 flex items-center gap-4">
                  <div className="rounded-md bg-blueish-100 px-2 py-1 text-xs font-medium text-blueish-dark">
                    {content.vacancy > 1
                      ? `${content.vacancy} Positions`
                      : `${content.vacancy} Position`}
                  </div>
                  <div className="rounded-md  bg-orangeish-100 px-2 py-1 text-xs font-medium text-orangeish-dark ">
                    {content.type}
                  </div>
                  <div className="rounded-md bg-greenish-100 px-2 py-1 text-xs font-medium text-greenish-dark ">
                    ${content.salary}
                  </div>
                  <div className="rounded-md bg-greenish-100 px-2 py-1 text-xs font-medium text-redish ">
                    {content.experience} Years
                  </div>
                </div>
              </div>
            </div>
            {btn && (
              <Link to={`/apply/${content._id}?title=${content.title}`}>
                <button className="btn-primary px-4 py-2 text-sm ">
                  Apply Now
                </button>
              </Link>
            )}
          </div>
          <Divider sx={{ marginBlock: 2 }} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationCard;
