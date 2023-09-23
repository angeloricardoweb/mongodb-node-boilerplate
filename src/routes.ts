import { Router } from "express";
import { listUsersController } from "./app/controllers/users/ListUsersController";

const router = Router();

router.get("/api/v1/users", listUsersController.handle);

// router.post("/api/v1/users", listUsersController.handle);

export { router };
