import { User } from "@/entities/user.entity";
import { IUserRepository } from "@/repositories/user.repository.interface";

export class UpdateRoleUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async handler(userId: number, role: string): Promise<User> {
    return this.userRepository.updateRole(userId, role);
  }
}