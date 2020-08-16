//previous app

const mongoose = require("mongoose");

const athleteSchema = new mongoose.Schema({
  id: {
    type: Object,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  year: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Athlete", athleteSchema);
