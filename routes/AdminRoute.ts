import express, { Request, Response, NextFunction } from "express"
import { createVendor, getVendorById, getVendors } from "../controllers";


const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({message: "Hello from the admin route"});
})
router.post("/vendor", createVendor)
router.get("/vendors", getVendors);
router.get("/vendor/:id", getVendorById);


export { router as AdminRoute }