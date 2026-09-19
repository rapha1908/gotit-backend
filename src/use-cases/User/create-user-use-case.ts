import { User } from "../../entities/user.entity";
import { UserRepository } from "../../repository/user.repository";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  handle(user: User): Promise<User> {
    return this.userRepository.create(user);
  }
}
