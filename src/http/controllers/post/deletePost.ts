import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-fount-error";
import { makeDeletePostUseCase } from "@/use-cases/factory/make-delete-post";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deletePost(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    postId: z.string(),
  });

  const { postId } = registerParamsSchema.parse(request.params);

  const deletePostUseCase = makeDeletePostUseCase();
  const result = await deletePostUseCase.handler(postId);

  if (!result) throw new ResourceNotFoundError();

  return reply.status(200).send({ id: result.id });
}
