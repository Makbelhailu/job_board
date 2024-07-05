import React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";
import MyButton from "./button"

const JobCard = ({ content, btns }) => {
  return (
    <Card
      sx={{ maxWidth: 450, borderRadius: 2, boxShadow: 5 }}
      className="shadow-lg"
    >
      <Link to="/jobs">
      <CardActionArea>
        <CardContent className="group bg-white hover:bg-secondary hover:text-white">
          <div className="m-2">
            <div className="mb-4 flex h-full w-full gap-x-4 ">
              <Avatar src={content.image} alt="user icon" />
              <div className="text-left leading-none">
                <h3 className="text-sm font-semibold capitalize">
                  {content.username}
                </h3>
                <h4 className="text-[10px] font-semibold text-gray-500 group-hover:text-white">
                  {content.location}
                </h4>
              </div>
            </div>
            <div className="flex flex-col gap-6 text-left">
              <div className="texts">
                <h2 className="text-md font-bold">{content.title}</h2>
                <p className="line-clamp-2 text-xs font-semibold text-slate-600 group-hover:text-slate-200">
                  {content.description}
                </p>
              </div>
              <div className="flex items-center justify-start gap-x-3 text-center">
                <div className="rounded-md bg-blueish-100 px-2 py-1 text-xs font-medium text-blueish group-hover:bg-secondary-dark group-hover:text-white">
                  2 Positions
                </div>
                <div className="rounded-md  bg-orangeish-100 px-2 py-1 text-xs font-medium text-orangeish group-hover:bg-secondary-dark  group-hover:text-white">
                  Fulltime
                </div>
                <div className="rounded-md bg-greenish-100 px-2 py-1 text-xs font-medium text-greenish group-hover:bg-secondary-dark  group-hover:text-white">
                  $2000/month
                </div>
              </div>
            </div>
            {btns === true ? (
              <div className="btns flex gap-5 mt-4">
                <Link to="/applications">
                <MyButton colored={true} className={"bg-secondary py-1 px-[6px] text-xs rounded-normal font-bold group-hover:border-primary gropu-hover:bg-secondary-dark text-primary  mx-0 btn-primary"}>
                  Apply Now
                </MyButton>
                </Link>
              </div>
            ) : (<div></div>)}
          </div>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
  );
};

export default JobCard;
