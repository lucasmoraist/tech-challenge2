import { User } from "@/entities/user.entity";
import { UserRepository } from "@/repositories/pg/user.repository";
import { database } from "@/lib/pg/db";

jest.mock("../../src/lib/pg/db", () => ({
  database: {
    clientInstance: {
      query: jest.fn(),
    },
  },
}));

describe("TeacherRepository", () => {
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = new UserRepository();
  });

  it("Create - Should create and returns a user", async () => {
    const user: User = {
      username: "xuxadasilva",
      password: "123",
    };

    user.id = 10;

    (database.clientInstance?.query as jest.Mock).mockResolvedValue({
      rows: [user],
    });

    const result = await userRepository.create(user);

    expect(result).toEqual(user);
    expect(result).toHaveProperty("id", 10);
    expect(result).toBeInstanceOf(Object);
  });

  it("Signin - Should return an existing user", async () => {
    const user: User = {
      id: 10,
      username: "xuxadasilva",
      password: "123",
    };

    (database.clientInstance?.query as jest.Mock).mockResolvedValue({
      rows: [user],
    });

    const result = await userRepository.signin(user.username);

    expect(result?.username).toEqual(user.username);
    expect(result).toHaveProperty("id", 10);
    expect(result).toBeInstanceOf(Object);
  });
});
