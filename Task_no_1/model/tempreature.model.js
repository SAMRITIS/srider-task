const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  coord: {
    lon: {
      type: Number,
    },
    lat: {
      type: Number,
    },
  },
  weather: [
    {
      id: {
        type: Number,
      },
      main: { type: String },
      description: { type: String },
      icon: { type: String },
    },
  ],
  base: { type: String },
  main: {
    temp: {
      type: Number,
    },
    feels_like: {
      type: Number,
    },
    temp_min: {
      type: Number,
    },
    temp_max: {
      type: Number,
    },
    pressure: {
      type: Number,
    },
    humidity: {
      type: Number,
    },
  },
  visibility: {
    type: Number,
  },
  wind: {
    speed: {
      type: Number,
    },
    deg: {
      type: Number,
    },
  },
  clouds: {
    all: {
      type: Number,
    },
  },
  dt: {
    type: Number,
  },
  sys: {
    type: {
      type: Number,
    },
    id: {
      type: Number,
    },
    country: { type: String },
    sunrise: {
      type: Number,
    },
    sunset: {
      type: Number,
    },
  },
  timezone: {
    type: Number,
  },
  id: {
    type: Number,
  },
  name: { type: String },
  cod: {
    type: Number,
  },
});

const Tempreature = mongoose.model("tempreature", schema);
module.exports = Tempreature;
