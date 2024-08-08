const User = require("../models/userModel");
const Job = require("../models/jobModel");

const clerkWebhook = async (req, res) => {
  const event = req.body;

  try {
    const userData = event.data;
    const { id, username, imageUrl, unsafeMetadata, created_at } = userData;

    if (event.type === "user.created" || event.type === "user.updated") {
      await User.upsert({
        userId: id,
        username,
        profile: imageUrl,
        accountType: unsafeMetadata.AccountType,
        created_at,
        updated_at: new Date(),
      });

      // Respond with a 200 status to acknowledge the webhook was received
      res.status(200).send("Webhook received successfully");
    } else if (event.type === "user.deleted") {
      await User.findOneAndDelete({ userId: id });
      await Job.deleteMany({ companyId: id });
      res.status(200).send("Webhook received successfully");
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
