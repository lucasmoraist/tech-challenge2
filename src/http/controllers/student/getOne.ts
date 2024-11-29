import { makeGetOneStudentUseCase } from "@/use-cases/student/factory/make-get-one-student";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getOne(req: FastifyRequest, res: FastifyReply) {
    const registerParamsSchema = z.object({
        userId: z.coerce.number(),
    });

    const { userId } = registerParamsSchema.parse(req.params);

    const getOneStudentUseCase = makeGetOneStudentUseCase();

    const student = await getOneStudentUseCase.handler(userId);

    return res.status(200).send(student);
}