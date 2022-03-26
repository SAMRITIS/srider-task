const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const createError = require("http-errors");
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("DB Connected");
  })
  .catch((err) => console.log(err));

const router = require("./router/index.router");
app.use("/api/v1", router);

app.use(async (req, res, next) => {
  next(createError(404, "Not Found"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message:
        process.env.MODE === "development" ? err.message : "Error Occoured",
    },
  });
});

module.exports = app.listen(port, () => {
  console.log(`Server is listening on the port no. ${port}`);
});
