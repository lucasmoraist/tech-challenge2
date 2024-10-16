import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-fount-error";
import { makeUpdateTeacherUseCase } from "@/use-cases/factory/make-update-teacher";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updateTeacher(req: FastifyRequest, res: FastifyReply) {
    const registerParamsSchema = z.object({
        teacherId: z.coerce.number(),
    });

    const { teacherId } = registerParamsSchema.parse(req.params);

    const registerBodySchema = z.object({
        name: z.string().optional(),
        school_subject: z.string().optional(),
    });

    const { name, school_subject } = registerBodySchema.parse(req.body);

    const updateTeacherUseCase = makeUpdateTeacherUseCase();

    const result = await updateTeacherUseCase.handler(teacherId, { name, school_subject });

    if (!result) throw new ResourceNotFoundError();

    return res.status(200).send(result);
}