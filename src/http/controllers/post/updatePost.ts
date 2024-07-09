import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-fount-error";
import { makeUpdatePostUseCase } from "@/use-cases/factory/make-update-post";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function UpdatePost(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    postId: z.string(),
  });

  const { postId } = registerParamsSchema.parse(request.params);

  const registerBodySchema = z.object({
    title: z.string(),
    content: z.string(),
  });

  const { title, content } = registerBodySchema.parse(request.body);

  const updatePostUseCase = makeUpdatePostUseCase();
  const result = await updatePostUseCase.handler(postId, { title, content });

  if (!result) throw new ResourceNotFoundError();

  return reply.status(200).send(result);
}
