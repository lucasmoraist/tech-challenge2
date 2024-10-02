import { InvalidCredentialError } from "@/use-cases/errors/invalid-credential-error";
import { makeGetTeacherUserIdUseCase } from "@/use-cases/teacher/factory/make-get-teacher-user-id";
import { makeSigninUserUseCase } from "@/use-cases/user/factory/make-signin-user";
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

  const getOneTeacherUseCase = makeGetTeacherUserIdUseCase();
  
  const userId = user.id;

  if (!userId) {
    throw new InvalidCredentialError();
  }

  const teacherId = await getOneTeacherUseCase.handler(userId);

  return reply.status(200).send(JSON.stringify({
    user_id: user.id,
    teacher_id: teacherId,
    token: token,
  }));
}
