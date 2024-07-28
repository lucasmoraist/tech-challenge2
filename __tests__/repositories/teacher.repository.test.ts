import { Teacher } from "@/entities/teacher.entity";
import { TeacherRepository } from "@/repositories/pg/teacher.repository";
import { database } from "@/lib/pg/db";

jest.mock("../../src/lib/pg/db", () => ({
  database: {
    clientInstance: {
      query: jest.fn(),
    },
  },
}));

describe("TeacherRepository", () => {
  let teacherRepository: TeacherRepository;

  beforeEach(() => {
    teacherRepository = new TeacherRepository();
  });

  it("Create - should create and returns a teacher", async () => {
    const teacher: Teacher = {
      name: "Napoleão de Almeida",
      school_subject: "Física",
      user_id: 10,
    };

    teacher.id = 10;

    (database.clientInstance?.query as jest.Mock).mockResolvedValue({
      rows: [teacher],
    });

    const result = await teacherRepository.create(teacher);

    expect(result).toEqual(teacher);
    expect(result).toHaveProperty("id", 10);
    expect(result).toBeInstanceOf(Object);
  });
});
