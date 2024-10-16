import { makeFindAllTeacherUseCase } from "@/use-cases/teacher/factory/make-find-all-teacher";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getAll(req: FastifyRequest, res: FastifyReply) {
    const getAllTeacherUseCase = makeFindAllTeacherUseCase();

    const result = await getAllTeacherUseCase.handler();

    return res.status(200).send(result);
}