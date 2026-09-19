import { hash } from "bcrypt";
import { User } from "../../entities/user.entity";
import { UserRepository } from "../../repository/user.repository";

const SALT_ROUNDS = 10;

interface CreateUserUseCaseRequest {
  name: string;
  email: string;
  password: string;
  role: "ADMIN" | "PRESTADOR";
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async handle({
    name,
    email,
    password,
    role,
  }: CreateUserUseCaseRequest): Promise<User> {
    const passwordHash = await hash(password, SALT_ROUNDS);

    const user = new User({
      name,
      email,
      password: passwordHash,
      role,
    });

    return this.userRepository.create(user);
  }
}
