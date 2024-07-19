import { makeCreatePostUseCase } from "@/use-cases/factory/make-create-post";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    title: z.string(),
    content: z.string(),
    teacher_id: z.coerce.number(),
  });

  const { title, content, teacher_id } = registerBodySchema.parse(request.body);

  const createPostUseCase = makeCreatePostUseCase();
  const post = await createPostUseCase.handler({ title, content, teacher_id });

  reply.status(201).send(post);
}
