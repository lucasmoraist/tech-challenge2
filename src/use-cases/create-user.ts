import { User } from "@/entities/user.entity";
import { IUserRepository } from "@/repositories/user.repository.interface";

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async handler(user: User): Promise<User> {
    return this.userRepository.create(user);
  }
}
