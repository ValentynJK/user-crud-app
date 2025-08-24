import prisma from "../utils/prisma";
import { Prisma } from "@prisma/client"; // <-- Add this line

class UserService {
  async addUser(data: Prisma.userCreateInput) {
    return await prisma.user.create({
      data: data,
    });
  }

  async findAllUsers() {
    return await prisma.user.findMany();
  }

  async findUser(id: number) {
    if (typeof id !== "string" && typeof id !== "number") {
      throw new Error("Invalid user id type");
    }
    return await prisma.user.findUnique({
      where: { id: id },
    });
  }

  async modifyUser(id: number, data: Prisma.userUpdateInput) {
    return await prisma.user.update({
      where: { id: id },
      data: data,
    });
  }

  async removeUser(id: number) {
    return await prisma.user.delete({
      where: { id: id },
    });
  }
}

export default UserService;
