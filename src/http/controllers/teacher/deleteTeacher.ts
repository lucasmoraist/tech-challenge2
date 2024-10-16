import { makeDeleteTeacherUseCase } from "@/use-cases/teacher/factory/make-delete-teacher";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteTeacher(req: FastifyRequest, res: FastifyReply) {
    const registerParamsSchema = z.object({
        teacherId: z.coerce.number(),
    });

    const { teacherId } = registerParamsSchema.parse(req.params);

    const deleteTeacherUseCase = makeDeleteTeacherUseCase();

    await deleteTeacherUseCase.handler(teacherId);

    return res.status(200).send();
}