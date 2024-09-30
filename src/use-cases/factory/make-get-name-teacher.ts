import { TeacherRepository } from "@/repositories/pg/teacher.repository";
import { GetIdTeacherUseCase } from "../get-teacher-user-id";

export function makeGetIdTeacherUseCase() {
  const teacherRepository = new TeacherRepository();
  const getIdTeacherUseCase = new GetIdTeacherUseCase(teacherRepository);

  return getIdTeacherUseCase;
}
