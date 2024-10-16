import { SwaggerOptions } from "@fastify/swagger";

export const swaggerConfig: SwaggerOptions = {
  openapi: {
    openapi: "3.0.0",
    info: {
      title: "BLOGGING",
      description: "Tech Challenge 2",
      version: "0.1.0",
      contact: {
        name: "Grupo 8",
        url: "https://grupo8.tech/"
      }
    },
    servers: [
      {
        url: "http://localhost:3000/",
        description: "Development",
      },
      {
        url: "https://tech-challenge2.grupo8.tech/",
        description: "Production",
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
};
