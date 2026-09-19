import fastify from "fastify";
import { userRoutes } from "./http/contellers/User/routes";

export const app = fastify();

app.register(userRoutes);
