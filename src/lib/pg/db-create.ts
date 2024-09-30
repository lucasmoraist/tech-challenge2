import { database } from "./db";

class DbCreate {
  async dbGenerate() {
    if (!database.clientInstance) {
      throw new Error("Database not connected");
    }

    await database.clientInstance.query(`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    `);

    await database.clientInstance.query(`
      CREATE TABLE IF NOT EXISTS "user" (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(100) NOT NULL
      );
    `);

    await database.clientInstance.query(`
      CREATE TABLE IF NOT EXISTS teacher (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        school_subject VARCHAR(255) NOT NULL,
        user_id INT UNIQUE,
        FOREIGN KEY (user_id) REFERENCES "user"(id)
      );
    `);

    await database.clientInstance.query(`
      CREATE TABLE IF NOT EXISTS post (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        urlImage TEXT,
        createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
        teacher_id INT NOT NULL,
        FOREIGN KEY (teacher_id) REFERENCES teacher(id)
      );
    `);
  }
}

export const dbCreate = new DbCreate();
