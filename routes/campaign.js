const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

// Route to get all campaigns
router.get("/all", ctrl.campaign.showAll);

// Route to get a specific campaign by ID
router.get("/:id", ctrl.campaign.show);

// Route to handle donations to a specific campaign
router.post("/donate", ctrl.campaign.donateToCampaign);

module.exports = router;
