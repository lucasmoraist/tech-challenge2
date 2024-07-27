import { User } from "../../src/entities/user.entity";
import { UserRepositoryMock } from "../mocks/user-repository-mock";
import { CreateUserUseCase } from "../../src/use-cases/create-user";
import { hash } from "bcryptjs";
import { SigninUserUseCase } from "../../src/use-cases/signin-user";

describe("User Use Cases", () => {
  it("CreateUserUseCase - Should return a new created user", async () => {
    const userRepository = new UserRepositoryMock();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    const user: User = {
      username: "xuxadasilva",
      password: "123",
    };

    const hashedPassword = await hash(user.password, 8);

    user.password = hashedPassword;

    const result = await createUserUseCase.handler(user);

    expect(result).toBeTruthy();
    expect(result).toBeInstanceOf(Object);
    expect(result).toHaveProperty("password", hashedPassword);
  });

  it("Signin = Should return a existing user by username", async () => {
    const userRepository = new UserRepositoryMock();
    const signinUserUseCase = new SigninUserUseCase(userRepository);

    const username = "xuxadasilva";
    const result = await signinUserUseCase.handler(username);

    expect(result).toBeTruthy();
    expect(result).toBeInstanceOf(Object);
    expect(result).toHaveProperty("username", username);
  });
});
