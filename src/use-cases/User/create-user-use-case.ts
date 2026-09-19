import { User } from "../../entities/user.entity";
import { UserRepository } from "../../repository/user.repository";

interface CreateUserUseCaseRequest {
  email: string;
  password: string;
  role: "ADMIN" | "PRESTADOR";
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  handle({ email, password, role }: CreateUserUseCaseRequest): Promise<User> {
    const user = new User({
      email,
      password,
      role,
    });

    return this.userRepository.create(user);
  }
}
