import { makeFindAllPostUseCase } from "@/use-cases/post/factory/make-find-all-post";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getAll(request: FastifyRequest, reply: FastifyReply) {
  const registerQuerySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  });

  const { page, limit } = registerQuerySchema.parse(request.query);

  const getAllPostUseCase = makeFindAllPostUseCase();
  const result = await getAllPostUseCase.handler(page, limit);

  return reply.status(200).send(result);
}
