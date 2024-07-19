import { FastifyInstance } from "fastify";
import { create } from "./create";
import { getAll } from "./getAll";
import { getOne } from "./getOne";
import { jwtValidate } from "@/http/middlewares/jwt-validate";
import { deletePost } from "./deletePost";
import { UpdatePost } from "./updatePost";
import { createPostSchema } from "@/lib/helper/swagger/post/create-post-schema";
import { getAllPostSchema } from "@/lib/helper/swagger/post/get-all-post-schema";
import { getOnePostSchema } from "@/lib/helper/swagger/post/get-one-post.schema";
import { updatePostSchema } from "@/lib/helper/swagger/post/update-post-schema";
import { removePostSchema } from "@/lib/helper/swagger/post/remove-post-schema";

export async function postRoutes(app: FastifyInstance) {
  app.get("/post", getAllPostSchema, getAll);
  app.get("/post/:postId", getOnePostSchema, getOne);
  app.post(
    "/post",
    { schema: createPostSchema, onRequest: [jwtValidate] },
    create
  );
  app.put(
    "/post/:postId",
    { schema: updatePostSchema, onRequest: [jwtValidate] },
    UpdatePost
  );
  app.delete(
    "/post/:postId",
    { schema: removePostSchema, onRequest: [jwtValidate] },
    deletePost
  );
}
