import { makeFindAllStudentUseCase } from "@/use-cases/student/factory/make-find-all-student";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getAll(req: FastifyRequest, res: FastifyReply) {
  const registerQuerySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  });

  const { page, limit } = registerQuerySchema.parse(req.query);

  const getAllStudentUseCase = makeFindAllStudentUseCase();

  const result = await getAllStudentUseCase.handler(page, limit);

  return res.status(200).send(result);
}
