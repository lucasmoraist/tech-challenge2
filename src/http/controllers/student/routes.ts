import { FastifyInstance } from "fastify";
import { create } from "./create";
import { getAll } from "./getAll";
import { getOne } from "./getOne";
import { updateStudent } from "./updateStudent";
import { deleteStudent } from "./deleteStudent";

export async function studentRoute(app: FastifyInstance) {
    app.post("/student", create);
    app.get("/admin/student", getAll);
    app.get("/admin/student/:studentId", getOne);
    app.put("/admin/student/:studentId", updateStudent);
    app.delete("/admin/student/:studentId", deleteStudent);
}