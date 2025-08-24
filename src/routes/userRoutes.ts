import { Router, Express } from "express";
import UserController from "../controllers/userController";
import UserService from "../services/userService";

const router = Router();
const userService = new UserService();
const userController = new UserController(userService);

export function setUserRoutes(app: Express) {
  app.use("/users", router);
  router.get("/", userController.getAllUsers.bind(userController));
  router.post("/", userController.createUser.bind(userController));
  router.get("/:id", userController.getUser.bind(userController));
  router.put("/:id", userController.updateUser.bind(userController));
  router.delete("/:id", userController.deleteUser.bind(userController));
}
