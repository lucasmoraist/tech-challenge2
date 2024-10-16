import { makeSearchPostUseCase } from "@/use-cases/post/factory/make-search-post";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function Search(request: FastifyRequest, reply: FastifyReply) {
  const registerQuerySchema = z.object({
    term: z.string(),
  });

  const { term } = registerQuerySchema.parse(request.query);

  const searchPostUseCase = makeSearchPostUseCase();
  const result = await searchPostUseCase.handler(term);

  return reply.status(200).send(result);
}
