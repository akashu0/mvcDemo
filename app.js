import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/dbconnection";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// connect to db

connectDb();

app.use(express.static("public"));

// set view engine

app.set("view engine", "ejs");
app.set("views", "./views/user");

const userRoutes = require("./routes/userRoute");

app.use("/", userRoutes);

app.get("*", (req, res) => {
  res.render("error", { error });
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => {
  console.log("Server started");
});
