import { Iuser } from "../entities/model/user.interface";
import { User } from "../entities/user.entity";
import { db } from "../lib/pg/db";

export class UserRepository {
  async create(user: User): Promise<User> {
    const result = await db.query(
      "INSERT INTO app_user (nome, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING id",
      [user.name, user.email, user.password, user.role],
    );

    user.id = result.rows[0].id;

    return user;
  }

  async findByEmail(email: string): Promise<Iuser | null> {
    return {
      id: "1",
      name: "Rapha",
      email: "rapha.@gmail.com",
      password: "123456",
      role: "ADMIN",
    };
  }
}
