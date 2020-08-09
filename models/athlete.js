//previous app

const mongoose = require("mongoose");

const athleteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  //   games: {
  //     type: Array,
  //     required: true,
  //   },
  //   era: {
  //     type: String,
  //     required: true,
  //   },
});

module.exports = mongoose.model("Athlete", athleteSchema);
