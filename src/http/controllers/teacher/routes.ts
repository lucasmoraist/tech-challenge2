import { FastifyInstance } from "fastify";
import { create } from "./create";
import { createTeacherSchema } from "@/lib/helper/swagger/teacher/create-teacher-schema";
import { getOne } from "./getOne";
import { jwtValidate } from "@/http/middlewares/jwt-validate";

export async function teacherRoutes(app: FastifyInstance) {
  app.post("/teacher", createTeacherSchema, create);
  app.get("/admin/teacher/:teacherId", { onRequest: [jwtValidate] }, getOne);
}
