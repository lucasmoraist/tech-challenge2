import { Student } from "@/entities/student.entity";
import { database } from "@/lib/pg/db";
import { StudentRepository } from "@/repositories/pg/student.repository";

jest.mock("../../src/lib/pg/db", () => ({
  database: {
    clientInstance: {
      query: jest.fn(),
    },
  },
}));

describe("StudentRepository", () => {
    let repository: StudentRepository;

    beforeEach(() => {
        repository = new StudentRepository();
    });

    it("Create - should create and returns a student", async () => {
        const student: Student = {
            name: "Napoleão de Almeida",
            user_id: 1,
        }

        student.id = 1;

        (database.clientInstance?.query as jest.Mock).mockResolvedValue({
            rows: [student],
        });

        const result = await repository.create(student);

        expect(result).toEqual(student);
        expect(result).toHaveProperty("id", 1);
        expect(result).toBeInstanceOf(Object);
    })
})
