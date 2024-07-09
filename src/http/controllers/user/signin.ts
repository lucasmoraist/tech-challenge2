import { InvalidCredentialError } from "@/use-cases/errors/invalid-credential-error";
import { makeSigninUserUseCase } from "@/use-cases/factory/make-signin-user";
import { compare } from "bcryptjs";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function signin(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  });

  const { username, password } = registerBodySchema.parse(request.body);

  const signinUserUseCase = makeSigninUserUseCase();
  const user = await signinUserUseCase.handler(username);

  if (!user) {
    throw new InvalidCredentialError();
  }

  const doesPasswordMatch = await compare(password, user.password);

  if (!doesPasswordMatch) {
    throw new InvalidCredentialError();
  }

  const token = await reply.jwtSign({ username });

  return reply.status(200).send({ token });
}
