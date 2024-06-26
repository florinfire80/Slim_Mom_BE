const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger-output.json");
require("dotenv").config();

const authRouter = require("./routes/api/auth");
const dailyRateRouter = require("./routes/api/daily-rate");
const dayRouter = require("./routes/api/day");
const productRouter = require("./routes/api/product");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/static", express.static("public"));

app.use("/auth", authRouter);
app.use("/daily-rate", dailyRateRouter);
app.use("/product", productRouter);
app.use("/day", dayRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({
    message,
  });
});

module.exports = app;
