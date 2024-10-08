require("dotenv").config();
const { createClerkClient } = require("@clerk/backend");
const User = require("../models/userModel");

const secretKey = process.env.CLERK_SECRET_KEY
const clerkClient = createClerkClient({ secretKey })

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const companyInfo = async (jobList) => {
  try {
    const companyIds = jobList.map((job) => job.companyId);
    const users = await User.find({ userId: { $in: companyIds } });

    const userMap = users.reduce((map, user) => {
      map[user.userId] = user;
      return map;
    }, {});

    const fullList = await await Promise.all(jobList.map(async (job) => {

      if (userMap[job.companyId]) {
        return {
          ...job._doc,
          username: userMap[job.companyId].username,
          profile: userMap[job.companyId].profile,
        }
      } else {
        try {

          const response = await clerkClient.users.getUser(job['companyId'])
          return {
            ...job._doc,
            username: response.username || "",
            profile: response.profile || "",
          }
        } catch (err) {
          return {
            ...job._doc,
            username: "",
            profile: "",
          }
        }
      }

    }));

    return fullList;
  } catch (err) {
    console.log("error fetching company info", err);
    throw Error(err);
  }
};

module.exports = companyInfo;
