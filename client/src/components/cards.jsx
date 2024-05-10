import React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

export const JobCard = ({ content }) => {
  return (
    <Card sx={{ maxWidth: 400, borderRadius: 2 }}>
      <CardActionArea>
        <CardContent className="px-3 hover:bg-secondary hover:text-red-100">
          <div className="my-5 flex h-full w-full gap-x-4 ">
            <Avatar src={content.image} alt="user icon" />
            <div className="text-left leading-none">
              <h3 className="text-sm font-semibold">{content.username}</h3>
              <h4 className="text-[10px]">{content.location}</h4>
            </div>
          </div>
          <div className="text-left">
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            <div className="flex items-center justify-start gap-x-3 text-center">
              <div className="bg-blueish-100 rounded-sm px-4 py-1 text-xs text-blueish">
                2 Positions
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
