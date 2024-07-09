import fastify from "fastify";
import { teacherRoutes } from "./http/controllers/teacher/routes";
import { postRoutes } from "./http/controllers/post/routes";
import { userRoutes } from "./http/controllers/user/routes";
import { globalErrorHandler } from "./utils/global-error-handler";
import fastifyJwt from "@fastify/jwt";
import { env } from "./env";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: { expiresIn: "100m" },
});

app.setErrorHandler(globalErrorHandler);

app.register(teacherRoutes);
app.register(userRoutes);
app.register(postRoutes);
