import { StudentRepository } from "@/repositories/pg/student.repository";
import { DeleteStudentUseCase } from "../delete-student";
import { GetAllStudentUseCase } from "../get-all-student";

export function makeFindAllStudentUseCase() {
    const studentRepository = new StudentRepository();
    const getAllStudentUseCase = new GetAllStudentUseCase(studentRepository);
    return getAllStudentUseCase;
}