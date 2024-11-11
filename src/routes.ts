import { Router } from "express";
import { listUsersController } from "./app/controllers/users/ListUsersController";
import { createAddressController } from "./app/controllers/adresses/CreateAddressController";
import { listAddressController } from "./app/controllers/adresses/ListAddressController";
import { findOneUsersController } from "./app/controllers/users/FindOneUsersController";
import { createUserController } from "./app/controllers/users/CreateUserController";

const router = Router();

router.get("/api/v1/users", listUsersController.handle);
router.get("/api/v1/users/:id", findOneUsersController.handle);
router.post("/api/v1/users", createUserController.handle);

router.get("/api/v1/addresses", listAddressController.handle);
router.post("/api/v1/addresses", createAddressController.handle);

// router.post("/api/v1/users", listUsersController.handle);

export { router };