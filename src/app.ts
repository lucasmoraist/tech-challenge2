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

export const app = fastify({ logger: true });

app.register(cors, {
  origin: "*",
  allowedHeaders: "*",
  methods: "*",
});

app.register(swagger, {
  openapi: {
    openapi: "3.0.0",
    info: {
      title: "BLOGGING",
      description: "Tech Challenge 2 - Grupo 8",
      version: "0.1.0",
    },
    servers: [
      {
        url: "https://tech-challenge2.grupo8.tech/",
        description: "Production",
      },
      {
        url: "http://localhost:3000",
        description: "Development",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
    },
  },
});

app.register(swaggerUi, {
  routePrefix: "/doc",
});

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: { expiresIn: "100m" },
});

app.setErrorHandler(globalErrorHandler);

app.register(teacherRoutes);
app.register(userRoutes);
app.register(postRoutes);
