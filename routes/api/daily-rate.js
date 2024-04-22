const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/daily-rateController");

const { validateBody, isValidId, authorize } = require("../../middlewares");
const { getDailyRateSchema } = require("../../models/daily-rate");
const router = express.Router();

router.post("/", validateBody(getDailyRateSchema), ctrlWrapper(ctrl.countDailyRate));

router.post("/:userId", authorize, isValidId, validateBody(getDailyRateSchema), ctrlWrapper(ctrl.countDailyRate));

module.exports = router;