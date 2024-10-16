import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-fount-error";
import { makeDeleteStudentUseCase } from "@/use-cases/student/factory/make-delete-student";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteStudent(req: FastifyRequest, res: FastifyReply) {
    const registerParamsSchema = z.object({
        studentId: z.coerce.number(),
    });

    const { studentId } = registerParamsSchema.parse(req.params);

    const deleteStudentUseCase = makeDeleteStudentUseCase();
    const result = await deleteStudentUseCase.handler(studentId);

    if (!result) throw new ResourceNotFoundError();

    return res.status(200).send({ studentId: result.id });
}