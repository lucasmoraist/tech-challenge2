import { Teacher } from "@/entities/teacher.entity";
import { ITeacherRepository } from "@/repositories/teacher.repository.interface";
import { TeacherUpdateType } from "@/types/teacher/teacher-update.type";

export class UpdateTeacherUseCase {
    constructor(private readonly teacherRepository: ITeacherRepository) {}

    async handler(teacherId: number, teacher: TeacherUpdateType): Promise<Teacher | null> {
        return this.teacherRepository.updateTeacher(teacherId, teacher);
    }
}