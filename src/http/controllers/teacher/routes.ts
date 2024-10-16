import { FastifyInstance } from "fastify";
import { create } from "./create";
import { createTeacherSchema } from "@/lib/helper/swagger/teacher/create-teacher-schema";
import { getOne } from "./getOne";
import { jwtValidate } from "@/http/middlewares/jwt-validate";
import { updateTeacher } from "./updateTeacher";
import { getAll } from "./getAll";
import { deleteTeacher } from "./deleteTeacher";

export async function teacherRoutes(app: FastifyInstance) {
  app.post("/teacher", createTeacherSchema, create);
  app.get("/teacher", getAll);
  app.get("/admin/teacher/:teacherId", { onRequest: [jwtValidate] }, getOne);
  app.put("/admin/teacher/:teacherId", { onRequest: [jwtValidate] }, updateTeacher);
  app.delete("/admin/teacher/:teacherId", { onRequest: [jwtValidate] }, deleteTeacher);
}
