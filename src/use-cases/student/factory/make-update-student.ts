import { StudentRepository } from "@/repositories/pg/student.repository";
import { DeleteStudentUseCase } from "../delete-student";
import { UpdateStudentUseCase } from "../update-student";

export function makeUpdateStudentUseCase() {
    const studentRepository = new StudentRepository();
    const updateStudentUseCase = new UpdateStudentUseCase(studentRepository);
    return updateStudentUseCase;
}