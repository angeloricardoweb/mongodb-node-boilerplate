import { Request, Response } from "express";
import { Address } from "../../models/Address";

class ListAddressController {
  async handle(request: Request, response: Response) {
    const data = await Address.find();

    return response.status(201).json(data);
  }
}

export const listAddressController = new ListAddressController();
