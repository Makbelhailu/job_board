require("dotenv").config();
const { createClerkClient } = require("@clerk/clerk-sdk-node");
const User = require("../models/userModel");

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

    const fullList = jobList.map((job) => ({
      ...job._doc,
      username: userMap[job.companyId] ? userMap[job.companyId].username : "",
      profile: userMap[job.companyId] ? userMap[job.companyId].profile : "",
    }));

    return fullList;
  } catch (err) {
    console.log("error fetching company info", err);
    throw Error(err);
  }
};

module.exports = companyInfo;
