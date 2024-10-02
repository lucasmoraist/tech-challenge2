import { User } from "@/domain/entities/user.entity";

export interface IUserRepository {
  create(user: User): Promise<User>;
  signin(username: string): Promise<User | null>;
}
