import { StudentRepository } from "@/repositories/pg/student.repository";
import { DeleteStudentUseCase } from "../delete-student";
import { GetOneStudentUseCase } from "../get-one-student";

export function makeGetOneStudentUseCase() {
    const studentRepository = new StudentRepository();
    const getOneStudent = new GetOneStudentUseCase(studentRepository);
    return getOneStudent;
}