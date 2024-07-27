import { Teacher } from "../../src/entities/teacher.entity";
import { CreateTeacherUseCase } from "../../src/use-cases/create-teacher";
import { TeacherRepositoryMock } from "../mocks/teacher-repository-mock";

describe("Teacher Use Cases", () => {
  it("CreateTeacherUseCase - Should return a new created teacher", async () => {
    const teacherRepository = new TeacherRepositoryMock();
    const createTeacherUseCase = new CreateTeacherUseCase(teacherRepository);

    const teacher: Teacher = {
      name: "Xuxa da Silva",
      school_subject: "História",
      user_id: 8,
    };

    const result = await createTeacherUseCase.handler(teacher);

    expect(result).toBeTruthy();
    expect(result).toBeInstanceOf(Object);
    expect(result).toHaveProperty("id", 8);
  });
});
