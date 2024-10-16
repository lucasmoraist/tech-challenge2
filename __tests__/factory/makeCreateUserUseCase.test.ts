import { UserRepository } from "@/repositories/pg/user.repository";
import { CreateUserUseCase } from "@/use-cases/user/create-user";
import { makeCreateUserUseCase } from "@/use-cases/user/make-create-user";

jest.mock("@/repositories/pg/post.repository", () => ({
  UserRepository: jest.fn(),
}));

describe("makeCreateUserUseCase", () => {
  it("Should create an instance of CreateUserUseCase with a UserRepository", () => {
    const userRepository = new UserRepository();
    const createUserUseCase = makeCreateUserUseCase();

    expect(createUserUseCase).toBeInstanceOf(CreateUserUseCase);
  });
});
