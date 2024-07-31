require("dotenv").config();
const { createClerkClient } = require("@clerk/clerk-sdk-node");

const companyInfo = async (userId) => {
  try {
    const clerkClient = createClerkClient({
      secretKey: process.env.CLERK_SECRET_KEY,
    });

    const userInfo = await clerkClient.users.getUser(userId);
    return userInfo;
    // next();
  } catch (err) {
    console.log("error fetching company info", err);
    // next();
  }
};

module.exports = companyInfo;
