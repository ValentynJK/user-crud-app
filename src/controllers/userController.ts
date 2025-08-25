import { Request, Response } from "express";
import UserService from "../services/userService";

class UserController {
  constructor(private userService: UserService) {}

  async createUser(req: Request, res: Response) {
    try {
      const userData = req.body;
      const newUser = await this.userService.addUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: "Error creating user", error });
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await this.userService.findAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error retrieving users", error });
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.id, 10);
      const user = await this.userService.findUser(userId);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error retrieving user", error });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.id, 10);
      const userData = req.body;
      const updatedUser = await this.userService.modifyUser(userId, userData);
      if (updatedUser) {
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating user", error });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.id, 10);
      const deletedUser = await this.userService.removeUser(userId);
      if (deletedUser) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "Pet not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting pet", error });
    }
  }
}

export default UserController;
