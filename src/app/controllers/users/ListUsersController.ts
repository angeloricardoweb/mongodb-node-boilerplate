import { Request, Response } from "express";
import { User } from "../../models/User";

class ListUsersController {
  async handle(request: Request, response: Response) {
    const users = await User.find();

    return response.json(users);
  }
}

export const listUsersController = new ListUsersController();
