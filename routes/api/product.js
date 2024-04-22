const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/dayController");

const { validate, authorize } = require("../../middlewares");
const { schemas } = require("../../models/day");
const { addNewProduct } = require("../../models/product")
const router = express.Router();

router.post("/", authorize, ctrlWrapper(ctrl.checkDailyRate), validate(schemas.searchQuerySchema, "query"), ctrlWrapper(ctrl.findProducts));

router.post("/add", authorize, ctrlWrapper(ctrl.checkDailyRate), validate(addNewProduct), ctrlWrapper(ctrl.addNewProduct));

module.exports = router;