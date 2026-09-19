import type { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { CreateUserUseCase } from "../../../use-cases/User/create-user-use-case";
import { UserRepository } from "../../../repository/user.repository";

export async function createUser(req: FastifyRequest, res: FastifyReply) {
  //indetify the user request body
  const userSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(["ADMIN", "PRESTADOR"]),
  });

  try {
    const { name, email, password, role } = userSchema.parse(req.body);

    const userRepository = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    await createUserUseCase.handle({ name, email, password, role });

    return res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).send({ error: error.issues });
    }

    return res.status(500).send({ error: "Internal Server Error" });
  }
}
