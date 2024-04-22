const Joi = require("joi");
const { Schema, model } = require("mongoose");

const { handleSaveErrors } = require("../helpers");

const summarySchema = new Schema({
  date: String,
  kcalLeft: Number,
  kcalConsumed: Number,
  percentsOfDailyRate: Number,
  dailyRate: Number,
  userId: Schema.Types.ObjectId,
});

summarySchema.post("save", handleSaveErrors);

const Summary = model("summary", summarySchema);

module.exports = {
  Summary,
};
