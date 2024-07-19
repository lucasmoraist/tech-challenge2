import { FastifyInstance } from "fastify";
import { create } from "./create";
import { createTeacherSchema } from "@/lib/helper/swagger/teacher/create-teacher-schema";

export async function teacherRoutes(app: FastifyInstance) {
  app.post("/teacher", createTeacherSchema, create);
}
