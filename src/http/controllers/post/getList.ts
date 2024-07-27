import { makeGetListPostUseCase } from "@/use-cases/factory/make-get-list-post";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getList(request: FastifyRequest, reply: FastifyReply) {
  const registerQuerySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  });

  const { page, limit } = registerQuerySchema.parse(request.query);

  const getListPostUseCase = makeGetListPostUseCase();
  const result = await getListPostUseCase.handler(page, limit);

  console.log(result);
  return reply.status(200).send(result);
}
