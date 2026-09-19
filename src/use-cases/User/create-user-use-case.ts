import { User } from "../../entities/user.entity";
import { UserRepository } from "../../repository/user.repository";

interface CreateUserUseCaseRequest {
  name: string;
  email: string;
  password: string;
  role: "ADMIN" | "PRESTADOR";
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  handle({
    name,
    email,
    password,
    role,
  }: CreateUserUseCaseRequest): Promise<User> {
    const user = new User({
      name,
      email,
      password,
      role,
    });

    return this.userRepository.create(user);
  }
}
