import { randomUUID } from "node:crypto";
import { Iuser } from "../entities/model/user.interface";
import { User } from "../entities/user.entity";

export class UserRepository {
  async create(user: User): Promise<User> {
    // simula o "DEFAULT gen_random_uuid()" do banco (script.sql) até o Postgres ser conectado de fato
    user.id = randomUUID();

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
