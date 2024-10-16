import { TeacherRepository } from "@/repositories/pg/teacher.repository";
import { GetAllTeacherUseCase } from "../get-all-teacher";

export function makeFindAllTeacherUseCase() {
    const teacherRepository = new TeacherRepository();
    const getAllTeacherUseCase = new GetAllTeacherUseCase(teacherRepository);
    return getAllTeacherUseCase;
}