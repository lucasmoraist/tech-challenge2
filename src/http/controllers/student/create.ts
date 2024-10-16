import { makeCreateStudentUseCase } from "@/use-cases/student/factory/make-create-student";
import { makeUpdateRoleUseCase } from "@/use-cases/user/factory/make-update-role";
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

    const updateRoleUseCase = makeUpdateRoleUseCase();

    await updateRoleUseCase.handler(user_id, "student");
    
    res.status(201).send(student);
}