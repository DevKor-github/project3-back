import { Request, Response, NextFunction } from "express";
//import * as locationService from "../service/locationService";
import { LocationSchema } from "../entity/Location";

import { geocodeAddress } from "../service/locationService";

export const getLocation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //const mylocation=await geocodeAddress;

    const { address } = req.body.address;
    const addtoCor = await geocodeAddress(address);
    res.status(200).json(addtoCor);
  } catch (error) {
    next(error);
  }
};
