import { Iuser } from "./model/user.interface";

export class User implements Iuser {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: "ADMIN" | "PRESTADOR";

  constructor({ id, name, email, password, role }: Iuser) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
