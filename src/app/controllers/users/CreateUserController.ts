import { Request, Response } from "express";
import { User } from "../../models/User";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const user = new User({
      name
    });

    await user.save();

    return response.json({
      status: "success",
      response: user,
    });
  }
}

export const createUserController = new CreateUserController();
