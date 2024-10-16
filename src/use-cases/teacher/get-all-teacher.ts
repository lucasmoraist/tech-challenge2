import { ITeacherRepository } from "@/repositories/teacher.repository.interface";

export class GetAllTeacherUseCase {
    constructor(private readonly teacherRepository: ITeacherRepository) {}

    async handler() {
        return this.teacherRepository.getAll();
    }
}