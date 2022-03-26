const dotenv = require("dotenv");
const createError = require("http-errors");
dotenv.config();
const axios = require("axios");
const Tempreature = require("../model/tempreature.model");
const primeChecker = require("../helper/primeChecker.helper");

exports.get_data = async (req, res, next) => {
  try {
    let todayDate = new Date().toLocaleDateString().split("/")[0];
    if (primeChecker(todayDate)) {
      const response = await axios.get(
        `${process.env.DOMAIN}?lat=51.50&lon=-0.12&appid=${process.env.API_KEY}`
      );
      await Tempreature.create(response.data);
      res.status(200).send({ data: response.data });
    } else {
      res
        .status(200)
        .send({ message: "Date is not prime so you can’t request the data" });
    }
  } catch (error) {
    next(createError(500, error.message || "Error Occoured"));
  }
};
