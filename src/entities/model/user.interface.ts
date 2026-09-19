export interface Iuser {
  id: string;
  email: string;
  password: string;
  role: "ADMIN" | "PRESTADOR";
}