import { StudentRepository } from "@/repositories/pg/student.repository";
import { DeleteStudentUseCase } from "../delete-student";

export function makeDeleteStudentUseCase() {
    const studentRepository = new StudentRepository();
    const deleteStudentUseCase = new DeleteStudentUseCase(studentRepository);
    return deleteStudentUseCase;
}