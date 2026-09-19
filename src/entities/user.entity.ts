import { Iuser } from "./model/user.interface";

export class User implements Iuser {
  id?: string;
  email: string;
  password: string;
  role: "ADMIN" | "PRESTADOR";

  constructor({ id, email, password, role }: Iuser) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
