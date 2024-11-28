import { FastifyInstance } from "fastify";
import { create } from "./create";
import { createTeacherSchema } from "@/lib/helper/swagger/teacher/create-teacher-schema";
import { getOne } from "./getOne";
import { jwtValidate } from "@/http/middlewares/jwt-validate";
import { updateTeacher } from "./updateTeacher";
import { getAll } from "./getAll";
import { deleteTeacher } from "./deleteTeacher";
import { getListTeacherSchema } from "@/lib/helper/swagger/teacher/get-all-teacher.schema";
import { getOneTeacherSchema } from "@/lib/helper/swagger/teacher/get-one.schema";
import { updateTeacherSchema } from "@/lib/helper/swagger/teacher/update-teacher.schema";
import { removeTeacherSchema } from "@/lib/helper/swagger/teacher/remove-teacher.schema";

export async function teacherRoutes(app: FastifyInstance) {
  app.post("/teacher", createTeacherSchema, create);
  app.get("/teacher", getListTeacherSchema, getAll);
  app.get(
    "/admin/teacher/:userId",
    { onRequest: [jwtValidate], schema: getOneTeacherSchema },
    getOne
  );
  app.put(
    "/admin/teacher/:teacherId",
    { onRequest: [jwtValidate], schema: updateTeacherSchema },
    updateTeacher
  );
  app.delete(
    "/admin/teacher/:teacherId",
    { onRequest: [jwtValidate], schema: removeTeacherSchema },
    deleteTeacher
  );
}
