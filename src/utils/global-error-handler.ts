import { env } from "@/env";
import { InvalidCredentialError } from "@/use-cases/errors/invalid-credential-error";
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-fount-error";
import { FastifyReply, FastifyRequest } from "fastify";
import { DatabaseError } from "pg";
import { ZodError } from "zod";

export function globalErrorHandler(
  error: Error,
  _: FastifyRequest,
  reply: FastifyReply
) {
  if (env.NODE_ENV === "development") {
    console.error(error);
  }

  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation Error", errors: error.format() });
  }

  if (error instanceof DatabaseError) {
    return reply
      .status(400)
      .send({ message: "Integrity Error", errors: error.message });
  }

  if (error instanceof ResourceNotFoundError) {
    return reply.status(404).send({ message: error.message });
  }

  if (error instanceof InvalidCredentialError) {
    return reply.status(401).send({ message: error.message });
  }
}
