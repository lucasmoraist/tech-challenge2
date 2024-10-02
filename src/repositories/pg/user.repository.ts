import { User } from "@/domain/entities/user.entity";
import { IUserRepository } from "@/repositories/user.repository.interface";
import { database } from "@/lib/pg/db";
import { DuplicateUsernameError } from "@/use-cases/errors/duplicate-username-error";

export class UserRepository implements IUserRepository {
  async signin(username: string): Promise<User | null> {
    const result = await database.clientInstance?.query(
      `
      SELECT * FROM "user"
      WHERE "user".username = $1
      `,
      [username]
    );
    return result?.rows[0];
  }

  async create({ username, password }: User): Promise<User> {
    try {
      const result = await database.clientInstance?.query(
        `
        INSERT INTO "user" (username, password) VALUES($1, $2) RETURNING *
        `,
        [username, password]
      );
  
      return result?.rows[0];
    } catch (error) {
      if (error instanceof DuplicateUsernameError) {
        if (error.cause === "unique_violation") {
          throw new DuplicateUsernameError();
        }
      }
      throw error;
    }
  }
}
