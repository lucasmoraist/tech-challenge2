import { UserRepository } from "@/repositories/pg/user.repository";
import { SigninUserUseCase } from "./signin-user";

export function makeSigninUserUseCase() {
  const userRepository = new UserRepository();
  const signinUserUseCase = new SigninUserUseCase(userRepository);
  return signinUserUseCase;
}
