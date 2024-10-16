import { ITeacherRepository } from "@/repositories/teacher.repository.interface";

export class DeleteTeacherUseCase {
    constructor(private readonly teacherRepository: ITeacherRepository) {}

    async handler(teacherId: number) {
        return this.teacherRepository.deleteTeacher(teacherId);
    }
}