import { User } from "@/entities/user.entity";
import { IUserRepository } from "@/repositories/user.repository.interface";

const users: User[] = [
  {
    id: 6,
    username: "joanadark",
    password: "$2a$08$TLDR8Q4TGN0CJ2ztkjsM7ueJrCUj60exwjHcZgQ.zolbzVszVyQf.",
    role: "teacher",
  },
  {
    id: 7,
    username: "xicadasilva",
    password: "$2a$08$TLDR8Q4TGN0CJ2ztkjsM7ueJrCUj60exwjHcZgQ.zolbzVszVyQf.",
    role: "teacher",
  },
];

export class UserRepositoryMock implements IUserRepository {
  create(user: User): Promise<User> {
    user.id = 8;
    users.push(user);
    return Promise.resolve(user);
  }
  
  signin(username: string): Promise<User | null> {
    const existingUser = users.find((i) => i.username === username) ?? null;
    return Promise.resolve(existingUser) || null;
  }
  
  updateRole(userId: number, role: string): Promise<User> {
    const user = users.find((i) => i.id === userId) as User;
    user.role = "teacher";
    return Promise.resolve(user);
  }
}
