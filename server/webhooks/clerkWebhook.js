export const clerkWebhook = async (req, res) => {
  const event = req.body;

  try {
    if (event.type === "user.created" || event.type === "user.updated") {
      const userData = event.data;

      const { id, username, imageUrl, last_name, created_at } = userData;

      await User.upsert({
        id,
        username,
        profile: 
        created_at,
        updated_at: new Date(),
      });

      // Respond with a 200 status to acknowledge the webhook was received
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
