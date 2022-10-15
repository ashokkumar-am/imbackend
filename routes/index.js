var express = require("express");
var router = express.Router();

// MODELS

let Enquiry = require("../models/enquiry");
let Industry = require("../models/industry");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// ENQUIRY GET POST GET/:id

router.get("/enquiry", async (req, res) => {
  try {
    const enquiries = await Enquiry.find({});
    res.status(201).json({
      success: true,
      enquiries,
    });
  } catch (error) {
    console.log(error);
    // next(error);
  }
});

router.post("/enquiry", async (req, res) => {
  try {
    const enquiries = new Enquiry({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      industry: req.body.industry,
      requirements: req.body.requirements,
    });
    res.send(enquiries);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error in Enquiries",
    });
  }
});

// INDUSTRY GET POST GET/:id



module.exports = router;
