const express = require("express");
const router = express.Router();
const Athlete = require("../models/athlete");

// All Athletes Route
router.get("/", async (req, res) => {
  let searchOptions = {};
  if (req.query.name != null && req.query.name !== "") {
    searchOptions.name = new RegExp(req.query.name, "i");
  }
  try {
    const athletes = await Athlete.find(searchOptions);
    res.render("athletes", {
      athletes: athletes,
      searchOptions: req.query,
    });
  } catch (err) {
    res.redirect("/");
  }
});

// New Athlete Route
router.get("/new", (req, res) => {
  res.render("athletes/new", { athlete: new Athlete() });
});

// Create Athlete Route
router.post("/", async (req, res) => {
  const athlete = new Athlete({
    name: req.body.name,
  });

  try {
    const newAthlete = await athlete.save();
    //res.redirect('athletes/${newAthlete.id}')
    res.redirect("athletes");
  } catch {
    res.render("athletes/new", {
      athlete: athlete,
      errorMessage: "Error creating Athlete",
    });
  }
});

module.exports = router;
