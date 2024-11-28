import { makeCreateUserUseCase } from "@/use-cases/user/factory/make-create-user";
import { hash } from "bcryptjs";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
    role: z.enum(["teacher", "student"]),
  });

  const { username, password, role } = registerBodySchema.parse(request.body);

  const hashedPassword = await hash(password, 8);

  const userWithHashedPassword = { username, password: hashedPassword, role };

  const createUserUseCase = makeCreateUserUseCase();
  const user = await createUserUseCase.handler(userWithHashedPassword);

  return reply.status(201).send({ id: user.id, username: user.username });
}
