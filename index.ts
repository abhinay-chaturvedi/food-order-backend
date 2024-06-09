import express from "express";
import bodyParser from "body-parser";
// import dotenv from "dotenv";
import mongoose from "mongoose";
import { AdminRoute, VendorRoute } from "./routes";
import { MONGO_URI } from "./config";

const app = express();
// dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//     console.log("lets check use");
//     next();
// })
// app.use((req, res, next) => {
//     console.log("lets check use 2");
//     next();
// })

app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);

app.get("/", (req, res) => {
  res.status(200).json("Api Is Live!");
});
// console.info(process.env.MONGO_URI)
mongoose
  .connect(MONGO_URI)
  .then((result) => console.info("Database connected successfully!"))
  .catch((err) => console.error(err));
app.listen(3000, () => {
  console.log("[server] server is listening on port 3000");
});
