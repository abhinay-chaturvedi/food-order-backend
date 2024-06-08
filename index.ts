import express from "express"
import bodyParser from "body-parser";
import { AdminRoute, VendorRoute } from "./routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
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
})

app.listen(3000, () => {

console.log("[server] server is listening on port 3000");

})