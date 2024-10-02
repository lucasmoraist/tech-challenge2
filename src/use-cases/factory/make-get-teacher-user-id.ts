import { TeacherRepository } from "@/repositories/pg/teacher.repository";
import { GetTeacherByUserIdUseCase } from "../teacher/get-teacher-user-id";

export function makeGetTeacherUserIdUseCase() {
    const teacherRepository = new TeacherRepository();
    const getIdTeacherUseCase = new GetTeacherByUserIdUseCase(teacherRepository);
    return getIdTeacherUseCase;
}