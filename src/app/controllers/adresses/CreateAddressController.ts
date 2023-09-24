import { Request, Response } from "express";
import { Address } from "../../models/Address";
import { User } from "../../models/User";

class CreateAddressController {
  async handle(request: Request, response: Response) {
    const address = await Address.create({
      address: request.body.address,
    });

    await User.findOneAndUpdate(
      { _id: request.body.user_id },
      { $set: { address: address._id } },
    );

    return response.status(201).json({
      message: "Endereço criado com sucesso",
    });
  }
}

export const createAddressController = new CreateAddressController();
