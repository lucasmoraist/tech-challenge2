import { TeacherRepository } from "@/repositories/pg/teacher.repository";
import { UpdateTeacherUseCase } from "../update-teacher";

export function makeUpdateTeacherUseCase() {
    const repository = new TeacherRepository();
    const updateTeacherUseCase = new UpdateTeacherUseCase(repository);
    return updateTeacherUseCase;
}