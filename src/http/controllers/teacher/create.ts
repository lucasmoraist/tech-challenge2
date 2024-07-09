import { makeCreateTeacherUseCase } from "@/use-cases/factory/make-create-teacher";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    school_subject: z.string(),
    user_id: z.coerce.number().optional(),
  });

  const { name, school_subject, user_id } = registerBodySchema.parse(
    request.body
  );

  const createTeacherUseCase = makeCreateTeacherUseCase();
  const teacher = await createTeacherUseCase.handler({
    name,
    school_subject,
    user_id,
  });

  reply.status(201).send({
    id: teacher.id,
    name: teacher.name,
    school_subject: teacher.school_subject,
  });
}
