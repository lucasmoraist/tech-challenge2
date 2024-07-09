import { FastifyInstance } from "fastify";
import { create } from "./create";
import { getAll } from "./getAll";
import { getOne } from "./getOne";
import { jwtValidate } from "@/http/middlewares/jwt-validate";
import { deletePost } from "./deletePost";
import { UpdatePost } from "./updatePost";

export async function postRoutes(app: FastifyInstance) {
  app.get("/post", getAll);
  app.get("/post/:postId", getOne);
  app.post("/post", { onRequest: [jwtValidate] }, create);
  app.put("/post/:postId", { onRequest: [jwtValidate] }, UpdatePost);
  app.delete("/post/:postId", { onRequest: [jwtValidate] }, deletePost);
}
