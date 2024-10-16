import fastify from "fastify";
import cors from "@fastify/cors";
import { teacherRoutes } from "./http/controllers/teacher/routes";
import { postRoutes } from "./http/controllers/post/routes";
import { userRoutes } from "./http/controllers/user/routes";
import { globalErrorHandler } from "./utils/global-error-handler";
import fastifyJwt from "@fastify/jwt";
import { env } from "./env";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import { swaggerConfig } from "./lib/helper/swagger/swagger-config";
import { studentRoute } from "./http/controllers/student/routes";

export const app = fastify({ logger: false });

app.register(cors, {
  origin: "*",
  allowedHeaders: "*",
  methods: "*",
});

app.register(swagger, swaggerConfig);

app.register(swaggerUi, {
  routePrefix: "/",
});

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: { expiresIn: "100m" },
});

app.setErrorHandler(globalErrorHandler);

app.register(teacherRoutes);
app.register(userRoutes);
app.register(postRoutes);
app.register(studentRoute);
