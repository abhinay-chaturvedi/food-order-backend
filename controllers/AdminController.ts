import { NextFunction, Request, Response } from "express";
import { createVendorInput } from "../dto";

export const createVendor = async (req: Request, res: Response, next: NextFunction) => {
    const body = <createVendorInput>req.body;
    return res.status(200).json(body)
}
export const getVendors = async (req: Request, res: Response, next: NextFunction) => {

}
export const getVendorById = async (req: Request, res: Response, next: NextFunction) => {

}