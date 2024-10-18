import { Student } from "@/entities/student.entity";
import { StudentRepository } from "@/repositories/pg/student.repository";
import { CreateStudentUseCase } from "@/use-cases/student/create-student";

describe("Student Use Cases", () => {
    it("CreateStudentUseCase - Should return a new created student", async () => {
        const repository =  new StudentRepository();
        const createStudentUseCase =  new CreateStudentUseCase(repository);

        const student: Student = {
            name: "Xuxa da Silva",
            user_id: 1,
        }

        const result = await createStudentUseCase.handler(student);

        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("id", 1);
    });
})