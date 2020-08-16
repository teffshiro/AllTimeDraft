const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.render("index");
// });

module.exports = router;

// For previous app

// const Athlete = require("../models/athlete");
// const { restart } = require("nodemon");

//Getting all
// router.get("/", async (req, res) => {
//   try {
//     const athletes = await Athlete.find();
//     res.json(athletes);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// //Getting one
// router.get("/:id", getAthlete, (req, res) => {
//   res.json(res.athlete);
// });

// //Creating one
// router.post("/", async (req, res) => {
//   const athlete = new Athlete({
//     name: req.body.name,
//     era: req.body.era,
//   });
//   try {
//     const newAthlete = await athlete.save();
//     res.status(201).json(newAthlete);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });
// //Updating one

// router.patch("/:id", getAthlete, async (req, res) => {
//   if (req.body.name != null) {
//     res.athlete.name = req.body.name;
//   }
//   if (req.body.era != null) {
//     res.athlete.era = req.body.era;
//   }

//   try {
//     const updatedAthlete = await res.athlete.save();
//     res.json(updatedAthlete);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// //Deleting one

// router.delete("/:id", getAthlete, async (req, res) => {
//   try {
//     await res.athlete.remove();
//     res.json({ message: "Deleted Athlete" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// async function getAthlete(req, res, next) {
//   let athlete;
//   try {
//     athlete = await Athlete.findById(req.params.id);
//     if (athlete == null) {
//       return res.status(404).json({ message: "Cannot find Athlete" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }
//   res.athlete = athlete;
//   next();
// }
