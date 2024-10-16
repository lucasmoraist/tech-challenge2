import { UserRepository } from "@/repositories/pg/user.repository";
import { CreateUserUseCase } from "@/use-cases/user/create-user";

export function makeCreateUserUseCase() {
  const userRepository = new UserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepository);
  return createUserUseCase;
}
