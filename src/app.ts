import fastify from "fastify";
import fastifyJwt from "@fastify/jwt";
import { userRoutes } from "./http/contellers/User/routes";
import { env } from "./env";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
});

app.register(userRoutes);
