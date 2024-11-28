import { User } from "@/entities/user.entity";
import { IUserRepository } from "@/repositories/user.repository.interface";
import { database } from "@/lib/pg/db";

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

  async create({username, password, role }: User): Promise<User> {
    const result = await database.clientInstance?.query(
      `
      INSERT INTO "user" (username, password, role) VALUES($1, $2, $3) RETURNING *
      `,
      [username, password, role]
    );

    return result?.rows[0];
  }

  async updateRole(userId: number, role: string): Promise<User> {
    const result = await database.clientInstance?.query(
      `
      UPDATE "user" 
      SET role = $1 
      WHERE id = $2 
      RETURNING *
      `,
      [role, userId]
    );

    return result?.rows[0];
  }
}
