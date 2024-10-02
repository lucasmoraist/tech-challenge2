import { makeGetTeacherUseCase } from "@/use-cases/teacher/factory/make-get-one-teacher";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getOne(request: FastifyRequest, reply: FastifyReply) {
    const registerParamsSchema = z.object({
        teacherId: z.coerce.number(),
    });

    const { teacherId } = registerParamsSchema.parse(request.params);

    const getOneTeacherUseCase = makeGetTeacherUseCase();
    const teacher = await getOneTeacherUseCase.handler(teacherId);

    return reply.status(200).send(JSON.stringify(teacher));
}