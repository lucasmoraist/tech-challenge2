import { FastifyInstance } from "fastify";
import { create } from "./create";
import { createTeacherSchema } from "@/lib/helper/swagger/teacher/create-teacher-schema";
import { getOne } from "./get-one";
import { jwtValidate } from "@/http/middlewares/jwt-validate";

// TODO: Adicionar requisições de atualização, listagem completa e exlusão de professores
export async function teacherRoutes(app: FastifyInstance) {
  app.post("/teacher", createTeacherSchema, create);
  // TODO: Adicionar schema do swagger
  app.get("/admin/teacher/:teacherId", 
    { onRequest: [jwtValidate] }, 
    getOne);
}
