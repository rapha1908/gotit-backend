import { randomUUID } from "node:crypto";
import { Iuser } from "../entities/model/user.interface";
import { User } from "../entities/user.entity";
import { Database } from "../lib/pg/db";

export class UserRepository {
  async create(user: User): Promise<User> {
    const result = await Database.clientInstance?.query(
      "INSERT INTO app_user (email, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
      [user.email, user.password, user.role],
    );

    return user;
  }

  async findByEmail(email: string): Promise<Iuser | null> {
    return {
      id: "1",
      email: "rapha.@gmail.com",
      password: "123456",
      role: "ADMIN",
    };
  }
}
