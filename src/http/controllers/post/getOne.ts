import { makeGetOnePostUseCase } from "@/use-cases/post/factory/make-get-one-post";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getOne(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    postId: z.string(),
  });

  const { postId } = registerParamsSchema.parse(request.params);

  const getOnePostUseCase = makeGetOnePostUseCase();
  const post = await getOnePostUseCase.handler(postId);

  return reply.status(200).send(post);
}
