import { TeacherRepository } from "@/repositories/pg/teacher.repository";
import { DeleteTeacherUseCase } from "../delete-teacher";

export function makeDeleteTeacherUseCase() {
    const teacherRepository = new TeacherRepository();
    const deleteTeacherUseCase = new DeleteTeacherUseCase(teacherRepository);
    return deleteTeacherUseCase;
}