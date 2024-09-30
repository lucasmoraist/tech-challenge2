import { InvalidCredentialError } from "@/use-cases/errors/invalid-credential-error";
import { makeGetIdTeacherUseCase } from "@/use-cases/factory/make-get-name-teacher";
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

  const getIdTeacherUseCase = makeGetIdTeacherUseCase();
  const userId = user.id;

  if (!userId) {
    throw new InvalidCredentialError();
  }

  const teacherId = await getIdTeacherUseCase.handler(userId);
  
  return reply.status(200).send(JSON.stringify({
    user_id: user.id,
    teacher_id: teacherId,
    token: token,
  }));
}
