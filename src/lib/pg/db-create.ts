import { database } from "./db";

class DbCreate {
  async dbGenerate() {
    if (!database.clientInstance) {
      throw new Error("Database not connected");
    }

    await database.clientInstance?.query(`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
      `);

    await database.clientInstance?.query(`
      BEGIN;

      CREATE TABLE IF NOT EXISTS "user" (
      id SERIAL primary key,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
      );

      COMMIT;
      `);

    await database.clientInstance?.query(`
      BEGIN;

        CREATE TABLE IF NOT EXISTS teacher (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        school_subject VARCHAR(255) NOT NULL,
        user_id INT UNIQUE,
        foreign key (user_id) references "user"(id) ON DELETE CASCADE
        );

      COMMIT;
      `);

    await database.clientInstance?.query(`
        BEGIN;

          CREATE TABLE IF NOT EXISTS post(
          id UUID primary key default uuid_generate_v4(),
          title VARCHAR(255) NOT NULL,
          content TEXT NOT NULL,
          urlImage TEXT NOT NULL,
          createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
          teacher_id INT NOT NULL,
          foreign key (teacher_id) references teacher(id)
          );

        COMMIT;

        `);
    
    await database.clientInstance?.query(`
      BEGIN;

        CREATE TABLE IF NOT EXISTS student(
        id SERIAL primary key,
        name VARCHAR(255) NOT NULL,
        user_id INT UNIQUE,
        foreign key (user_id) references "user"(id) ON DELETE CASCADE
        );

      COMMIT;  
    `);

    await database.clientInstance?.query(`
      BEGIN;

        ALTER TABLE "user" ADD COLUMN role VARCHAR(10);
      
      COMMIT;
    `);
  }
}

export const dbCreate = new DbCreate();
