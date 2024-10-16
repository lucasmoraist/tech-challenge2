import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-fount-error";
import { makeUpdateStudentUseCase } from "@/use-cases/student/factory/make-update-student";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updateStudent(req: FastifyRequest, res: FastifyReply) {

    const registerParamsSchema = z.object({
        studentId: z.coerce.number(),
    });

    const { studentId } = registerParamsSchema.parse(req.params);

    const registerBodySchema = z.object({
        name: z.string()
    });

    const { name } = registerBodySchema.parse(req.body);

    const updateStudentUseCase = makeUpdateStudentUseCase();

    const student = await updateStudentUseCase.handler(studentId, { name });

    console.log("Id do estudante", studentId);
    

    if (!student) throw new ResourceNotFoundError();

    return res.status(200).send(student);

}