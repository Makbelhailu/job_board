const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jobRoute = require("./routes/jobs");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const applicationRoute = require("./routes/applications");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/v1/jobs", jobRoute);
app.use("/api/v1/applications", applicationRoute);

mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/JobBoard")
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
