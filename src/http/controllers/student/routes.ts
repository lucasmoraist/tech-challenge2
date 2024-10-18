import { FastifyInstance } from "fastify";
import { create } from "./create";
import { getAll } from "./getAll";
import { getOne } from "./getOne";
import { updateStudent } from "./updateStudent";
import { deleteStudent } from "./deleteStudent";
import { jwtValidate } from "@/http/middlewares/jwt-validate";
import { createStudentSchema } from "@/lib/helper/swagger/student/create-student-schema";
import { getListStudentSchema } from "@/lib/helper/swagger/student/get-all-student.schema";
import { getOneStudentSchema } from "@/lib/helper/swagger/student/get-one.schema";
import { updateStudentSchema } from "@/lib/helper/swagger/student/update-student.schema";
import { removeStudentSchema } from "@/lib/helper/swagger/student/remove-student.schema";

export async function studentRoute(app: FastifyInstance) {
  app.post("/student", createStudentSchema, create);
  app.get(
    "/admin/student",
    { onRequest: [jwtValidate], schema: getListStudentSchema },
    getAll
  );
  app.get(
    "/admin/student/:studentId",
    { onRequest: [jwtValidate], schema: getOneStudentSchema },
    getOne
  );
  app.put(
    "/admin/student/:studentId",
    { onRequest: [jwtValidate], schema: updateStudentSchema },
    updateStudent
  );
  app.delete(
    "/admin/student/:studentId",
    { onRequest: [jwtValidate], schema: removeStudentSchema },
    deleteStudent
  );
}
