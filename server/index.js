const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jobRoute = require('./routes/jobs');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoute)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    })
  })
  .catch((error) => console.error(error))
