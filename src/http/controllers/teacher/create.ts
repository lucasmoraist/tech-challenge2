import { makeCreateTeacherUseCase } from "@/use-cases/teacher/factory/make-create-teacher";
import { makeUpdateRoleUseCase } from "@/use-cases/user/factory/make-update-role";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    school_subject: z.string(),
    user_id: z.coerce.number(),
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

  const updateRoleUseCase = makeUpdateRoleUseCase();

  await updateRoleUseCase.handler(user_id, "teacher");

  reply.status(201).send({
    id: teacher.id,
    name: teacher.name,
    school_subject: teacher.school_subject,
  });
}
