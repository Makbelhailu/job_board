const mongoose = require("mongoose");
const User = require("../models/userModel");
const Job = require("../models/jobModel");
const Application = require("../models/applicationModel");

const clerkWebhook = async (req, res) => {
  const event = req.body;

  try {
    const userData = event.data;
    const { id, username, image_url, unsafe_metadata, created_at } = userData;

    if (event.type === "user.created") {
      await User.create({
        userId: id,
        username,
        profile: image_url,
        accountType: unsafe_metadata.AccountType,
        created_at,
        updated_at: new Date(),
      });

      // Respond with a 200 status to acknowledge the webhook was received
      res.status(200).send("Webhook received successfully");
      console.log("Webhook received successfully");
    } else if (event.type === "user.updated") {
      await User.findOneAndUpdate(
        { userId: id },
        {
          username,
          profile: image_url,
          accountType: unsafe_metadata.AccountType,
          updated_at: new Date(),
        }
      );

      // Respond with a 200 status to acknowledge the webhook was received
      res.status(200).send("Webhook received successfully");
      console.log("Webhook received successfully");
    } else if (event.type === "user.deleted") {
      await User.findOneAndDelete({ userId: id });
      await Job.deleteMany({ companyId: id });
      //   await Application.deleteMany({ userId: id });

      res.status(200).send("Webhook received successfully");
      console.log("Webhook received successfully");
    } else {
      // For other events, just acknowledge receipt
      res.status(200).send("Event ignored");
    }
  } catch (error) {
    console.error("Error handling webhook:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = clerkWebhook;
