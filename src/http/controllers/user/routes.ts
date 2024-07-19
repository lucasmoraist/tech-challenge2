import { FastifyInstance } from "fastify";
import { create } from "./create";
import { signin } from "./signin";
import { createUserSchema } from "@/lib/helper/swagger/user/create-user-schema";
import { signinUserSchema } from "@/lib/helper/swagger/user/signin-user-schema";

export async function userRoutes(app: FastifyInstance) {
  app.post("/user", createUserSchema, create);
  app.post("/user/signin", signinUserSchema, signin);
}
