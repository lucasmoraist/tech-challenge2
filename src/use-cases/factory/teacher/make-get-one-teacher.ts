import { TeacherRepository } from "@/repositories/pg/teacher.repository";
import { GetOneTeacher } from "../../teacher/get-one-teacher";

export function makeGetTeacherUseCase() {
  const teacherRepository = new TeacherRepository();
  const getIdTeacherUseCase = new GetOneTeacher(teacherRepository);

  return getIdTeacherUseCase;
}
