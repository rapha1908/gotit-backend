import type { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { CreateUserUseCase } from "../../../use-cases/User/create-user-use-case";
import { UserRepository } from "../../../repository/user.repository";

export async function createUser(req: FastifyRequest, res: FastifyReply) {
  //indetify the user request body
  const userSchema = z.object({
    id: z.string().uuid(),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(["ADMIN", "PRESTADOR"]),
  });

  const { id, email, password, role } = userSchema.parse(req.body);

  try {
    const userRepository = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    await createUserUseCase.handle({ id, email, password, role });

    return res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
}
