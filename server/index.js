const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
require("dotenv").config();
const companyInfo = require("./middlewares/clerkMiddleware");
const jobRoute = require("./routes/jobs");
const applicationRoute = require("./routes/applications");
const clerkWebhook = require("./webhooks/clerkWebhook");
const app = express();

// app.use(companyInfo);

app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:3000"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(morgan("dev"));

app.post("/webhook/clerk", clerkWebhook);

app.use("/api/v1/jobs", jobRoute);
app.use("/api/v1/application", applicationRoute);

mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/JobBoard")
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("error connecting to db"));
