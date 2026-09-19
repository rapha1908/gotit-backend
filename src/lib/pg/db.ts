import { Pool, PoolClient } from "pg";
import { env } from "../../env";

const CONFIG = {
  user: env.PG_USER,
  host: env.PG_HOST,
  database: env.PG_DATABASE,
  password: env.PG_PASSWORD,
  port: env.PG_PORT,
};

export class Database {
  private pool: Pool;
  private client: PoolClient | undefined;
  static clientInstance: any;

  constructor() {
    this.pool = new Pool(CONFIG);
    this.connect();
  }

  private async connect() {
    try {
      this.client = await this.pool.connect();
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
  }

  get clientInstance() {
    return this.client;
  }
}
