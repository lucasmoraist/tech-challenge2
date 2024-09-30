import { ITeacherRepository } from "@/repositories/teacher.repository.interface";

export class GetOneTeacher {
    constructor(private readonly teacherRepository: ITeacherRepository) {}
    
    async handler(id: number) {
        return this.teacherRepository.getTeacherById(id);
    }
}