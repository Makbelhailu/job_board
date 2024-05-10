import React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

export const JobCard = ({ content }) => {
  return (
    <Card sx={{ maxWidth: 400, borderRadius: 2 }}>
      <CardActionArea>
        <CardContent className="px-3 hover:bg-secondary hover:text-white">
          <div className="my-5 flex h-full w-full gap-x-4 ">
            <Avatar src={content.image} alt="user icon" />
            <div className="leading-none">
              <h3>{content.username}</h3>
              <h4>{content.location}</h4>
            </div>
          </div>
          <div className="text-left">
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            <div className="flex items-center justify-start gap-x-3 text-center">
              <div className="bg-blueish-100 px-2 py-2 text-xs text-blueish">
                hi
              </div>
              <div className=" px-2 py-2 text-xs ">bye</div>
              <div className=" px-2 py-2 text-xs ">see you</div>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
