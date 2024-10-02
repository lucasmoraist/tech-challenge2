import { User } from "@/entities/user.entity";
import { IUserRepository } from "@/repositories/user.repository.interface";

export class SigninUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async handler(username: string): Promise<User | null> {
    return this.userRepository.signin(username);
  }
}
