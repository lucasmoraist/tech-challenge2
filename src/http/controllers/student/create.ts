import { makeCreateStudentUseCase } from "@/use-cases/student/factory/make-create-student";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(req: FastifyRequest, res: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        user_id: z.coerce.number(),
    });

    const { name, user_id } = registerBodySchema.parse(req.body);

    const createStudentUseCase = makeCreateStudentUseCase();

    const student = await createStudentUseCase.handler({ name, user_id });
    
    res.status(201).send(student);
}