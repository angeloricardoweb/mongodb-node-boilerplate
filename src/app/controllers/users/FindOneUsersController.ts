import { Request, Response } from "express";
import { User } from "../../models/User";

class FindOneUsersController {
  async handle(request: Request, response: Response) {
    const user = await User.findOne({ _id: request.params.id }).populate(
      "address"
    )

    if (!user) {
      return response.status(404).json({
        message: "Usuário não encontrado",
      });
    }

    return response.json(user);
  }
}

export const findOneUsersController = new FindOneUsersController();
