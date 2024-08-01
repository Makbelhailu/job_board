require("dotenv").config();
const { createClerkClient } = require("@clerk/clerk-sdk-node");

const companyInfo = async (jobList) => {
  try {
    const clerkClient = createClerkClient({
      secretKey: process.env.CLERK_SECRET_KEY,
    });
    const allUserInfo = await clerkClient.users.getUserList();

    const fullJobList = jobList.map((job) => {
      const jobObj = job.toObject();
      const userInfo = allUserInfo["data"].filter(
        (data) => data["id"] === job.companyId
      );
      if (userInfo) {
        jobObj.profile = userInfo[0].imageUrl;
        jobObj.username = userInfo[0].username;
      }
      return jobObj;
    });

    return fullJobList;
  } catch (err) {
    console.log("error fetching company info", err);
    return jobList;
  }
};

module.exports = companyInfo;
