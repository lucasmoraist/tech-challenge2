import { TeacherRepository } from "@/repositories/pg/teacher.repository";
import { GetNameTeacherUseCase } from "../get-name-teacher";

export function makeGetNameTeacherUseCase() {
  const teacherRepository = new TeacherRepository();
  const getNameTeacherUseCase = new GetNameTeacherUseCase(teacherRepository);

  return getNameTeacherUseCase;
}
