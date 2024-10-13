import { TeacherRepository } from "@/repositories/pg/teacher.repository";
import { GetOneTeacherUseCase } from "../get-one-teacher";

export function makeGetOneTeacherUseCase() {
  const teacherRespository = new TeacherRepository();
  const getOneTeacherUseCase = new GetOneTeacherUseCase(teacherRespository);
  return getOneTeacherUseCase;
}
