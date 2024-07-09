import { FastifyInstance } from "fastify";
import { create } from "./create";

export async function teacherRoutes(app: FastifyInstance) {
  app.post("/teacher", create);
}
