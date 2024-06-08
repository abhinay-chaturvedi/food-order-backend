import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({message: "Hello from vendor route."});
})
export { router as VendorRoute };
