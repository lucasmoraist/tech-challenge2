import { makeGetOneTeacherUseCase } from "@/use-cases/teacher/factory/make-get-one-teacher";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getOne(req: FastifyRequest, res: FastifyReply) {
  const registerParamsSchema = z.object({
    userId: z.coerce.number(),
  });

  const { userId } = registerParamsSchema.parse(req.params);

  const getOneTeacherUseCase = makeGetOneTeacherUseCase();
  const teacher = await getOneTeacherUseCase.handler(userId);

  return res.status(200).send(JSON.stringify(teacher));
}
