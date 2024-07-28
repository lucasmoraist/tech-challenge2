import { env } from "@/env";
import { Pool, PoolClient } from "pg";
import { dbCreate } from "./db-create";

const CONFIG = {
  host: env.POSTGRES_HOST,
  port: env.POSTGRES_PORT,
  user: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DB,
  ssl: env.NODE_ENV === "production" ? true : false,
};

class Database {
  private pool: Pool;
  private client: PoolClient | undefined;

  constructor() {
    this.pool = new Pool(CONFIG);
    this.connect();
  }

  private async connect() {
    try {
      this.client = await this.pool.connect();
      dbCreate.dbGenerate();
    } catch (error) {
      console.error(`Error starting connect with database pg`);
      throw new Error(`Error starting connect with database pg`);
    }
  }

  get clientInstance() {
    return this.client;
  }
}

export const database = new Database();
