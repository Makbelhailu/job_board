import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

import { useClerk, useUser } from "@clerk/clerk-react";

import { Link } from "react-router-dom";
import MyButton from "./button";

const JobCard = ({ content, btn, className }) => {
  const { isSignedIn } = useUser();
  const clerk = useClerk();

  return (
    <Card
      sx={{ minHeight: "100%", borderRadius: 2, boxShadow: 5 }}
      className={`h-full  shadow-lg ${className ? className : "w-full sm:w-[600px] md:w-full xl:w-auto xl:max-w-[350px]"}`}
    >
      <Link
        to={isSignedIn ? `/jobs/${content._id}` : "/"}
        onClick={() => {
          if (!isSignedIn) clerk.openSignUp();
        }}
      >
        <CardActionArea
          sx={{ margin: 0, padding: 0, width: "100%", height: "100%" }}
        >
          <CardContent className="group h-full w-full bg-white hover:bg-secondary hover:text-white">
            <div className="m-2">
              <div className="mb-4 flex h-full w-full gap-x-4 ">
                <Avatar src={content.profile} alt="user icon" />
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
                <div className="flex flex-wrap items-center justify-start gap-x-2 gap-y-3 text-center">
                  <div className="rounded-md bg-blueish-100 px-2 py-1 text-xs font-medium text-blueish group-hover:bg-secondary-dark group-hover:text-white">
                    {content.vacancy > 1
                      ? `${content.vacancy} Positions`
                      : `${content.vacancy} Position`}
                  </div>
                  <div className="rounded-md  bg-orangeish-100 px-2 py-1 text-xs font-medium text-orangeish group-hover:bg-secondary-dark  group-hover:text-white">
                    {content.type}
                  </div>
                  <div className="rounded-md bg-greenish-100 px-2 py-1 text-xs font-medium text-greenish group-hover:bg-secondary-dark  group-hover:text-white">
                    ${content.salary}
                  </div>
                </div>
              </div>
              {btn && isSignedIn && (
                <div className="btns mt-4 flex gap-5">
                  <Link
                    to={`/apply/${content._id}?title=${content.title}&salary=${content.salary}`}
                  >
                    <MyButton
                      className={
                        "btn-primary mx-0 rounded-normal bg-secondary px-[6px] py-1 text-xs font-bold outline-none group-hover:border-primary group-hover:outline"
                      }
                    >
                      Apply Now
                    </MyButton>
                  </Link>
                </div>
              )}
            </div>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

JobCard.propTypes = {
  content: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    salary: PropTypes.string,
    vacancy: PropTypes.number,
    location: PropTypes.string,
    description: PropTypes.string,
    profile: PropTypes.string,
    username: PropTypes.string,
  }),
  btn: PropTypes.bool,
  className: PropTypes.string,
};
JobCard.defaultProps = {
  btn: false,
  className: "",
};

export default JobCard;
