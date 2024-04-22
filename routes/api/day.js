const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/dayController");

const { validateBody, authorize } = require("../../middlewares");
const { schemas } = require("../../models/day");
const router = express.Router();

router.post(
  "/",
  authorize,
  ctrlWrapper(ctrl.checkDailyRate),
  validateBody(schemas.addProductSchema),
  ctrlWrapper(ctrl.addProduct)
);

router.post(
  "/product",
  authorize,
  ctrlWrapper(ctrl.checkDailyRate),
  validateBody(schemas.getProductSchema),
  ctrlWrapper(ctrl.getEatenProduct)
);

router.post(
  "/info",
  authorize,
  ctrlWrapper(ctrl.checkDailyRate),
  validateBody(schemas.getDayInfoScheme),
  ctrlWrapper(ctrl.getDayInfo)
);

router.get(
  "/period",
  authorize,
  ctrlWrapper(ctrl.checkDailyRate),
  ctrlWrapper(ctrl.getPeriodInfo)
);

router.post(
  "/delete",
  authorize,
  ctrlWrapper(ctrl.checkDailyRate),
  validateBody(schemas.deleteProductSchema),
  ctrlWrapper(ctrl.deleteProduct)
);

module.exports = router;
