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
import { getList } from "./getList";
import { getListPostSchema } from "@/lib/helper/swagger/post/get-list-post-schema";
import { Search } from "./searchPost";
import { searchPostSchema } from "@/lib/helper/swagger/post/search-post-schema";

export async function postRoutes(app: FastifyInstance) {
  // app.get(
  //   "/admin/posts",
  //   { schema: getAllPostSchema, onRequest: [jwtValidate] },
  //   getAll
  // );

  app.get("/posts", getListPostSchema, getList);

  app.get("/posts/:postId", getOnePostSchema, getOne);

  app.post(
    "/admin/posts",
    { schema: createPostSchema, onRequest: [jwtValidate] },
    create
  );

  app.get("/posts/search", searchPostSchema, Search);

  app.put(
    "/admin/posts/:postId",
    { schema: updatePostSchema, onRequest: [jwtValidate] },
    UpdatePost
  );

  app.delete(
    "/admin/posts/:postId",
    { schema: removePostSchema, onRequest: [jwtValidate] },
    deletePost
  );
}
