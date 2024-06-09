import { NextFunction, Request, Response } from "express";
import { createVendorInput } from "../dto";
import { vendorModel } from "../models";

export const createVendor = async (req: Request, res: Response, next: NextFunction) => {
    const body = <createVendorInput>req.body;
    const createdVendor = await vendorModel.create({
        name: body.name,
        address: body.address,
        pincode: body.pincode,
        foodType: body.foodType,
        email: body.email,
        password: body.password,
        ownerName: body.ownerName,
        phone: body.phone,
        rating: 0,
        serviceAvailable: false,
        coverImages: [],
        salt: ''
    })
    return res.status(200).json(body)
}
export const getVendors = async (req: Request, res: Response, next: NextFunction) => {

}
export const getVendorById = async (req: Request, res: Response, next: NextFunction) => {

}