import express from "express"



const app = express();



app.use("/", (req, res) => {
    console.log("hi")
    res.json("Hi There, Food order backend is healthy!");
})



app.listen(3000, () => {

console.log("[server] server is listening on port 3000");

})