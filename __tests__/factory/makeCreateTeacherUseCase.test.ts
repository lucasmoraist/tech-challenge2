import { TeacherRepository } from "@/repositories/pg/teacher.repository";
import { CreateTeacherUseCase } from "@/use-cases/teacher/create-teacher";
import { makeCreateTeacherUseCase } from "@/use-cases/teacher/factory/make-create-teacher";

jest.mock("@/repositories/pg/teacher.repository", () => ({
  TeacherRepository: jest.fn(),
}));

describe("makeCreateTeacherUseCase", () => {
  it("Should create an instance of CreateTeacherUseCase with a TeacherRepository", () => {
    const teacherRepository = new TeacherRepository();
    const createTeacherUseCase = makeCreateTeacherUseCase();

    expect(createTeacherUseCase).toBeInstanceOf(CreateTeacherUseCase);
  });
});
