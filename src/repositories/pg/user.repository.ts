import { IUser } from "@/entities/models/user.interface";
import { IUserRepository } from "../user.repository.interface";
import { database } from "@/lib/pg/db";

export class UserRepository implements IUserRepository {
  async signin(username: string): Promise<IUser | null> {
    const result = await database.clientInstance?.query(
      `
      SELECT * FROM "user"
      WHERE "user".username = $1
      `,
      [username]
    );
    return result?.rows[0];
  }

  async create({ username, password }: IUser): Promise<IUser> {
    const result = await database.clientInstance?.query(
      `
      INSERT INTO "user" (username, password) VALUES($1, $2) RETURNING *
      `,
      [username, password]
    );
    return result?.rows[0];
  }
}