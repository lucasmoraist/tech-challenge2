"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/http/controllers/post/routes.ts
var routes_exports = {};
__export(routes_exports, {
  postRoutes: () => postRoutes
});
module.exports = __toCommonJS(routes_exports);

// src/env/index.ts
var import_config = require("dotenv/config");
var import_zod = require("zod");
var envSchema = import_zod.z.object({
  PORT: import_zod.z.coerce.number(),
  NODE_ENV: import_zod.z.enum(["development", "test", "production"]).default("development"),
  POSTGRES_HOST: import_zod.z.string(),
  POSTGRES_PORT: import_zod.z.coerce.number(),
  POSTGRES_USER: import_zod.z.string(),
  POSTGRES_PASSWORD: import_zod.z.string(),
  POSTGRES_DB: import_zod.z.string(),
  JWT_SECRET: import_zod.z.string()
});
var _env = envSchema.safeParse(process.env);
if (!_env.success) {
  console.error(`Invalid environment variables`);
  throw new Error(`Invalid environment variables`);
}
var env = _env.data;

// src/lib/pg/db.ts
var import_pg = require("pg");
var CONFIG = {
  host: env.POSTGRES_HOST,
  port: env.POSTGRES_PORT,
  user: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DB
  // ssl: true,
};
var Database = class {
  pool;
  client;
  constructor() {
    this.pool = new import_pg.Pool(CONFIG);
    this.connect();
  }
  async connect() {
    try {
      this.client = await this.pool.connect();
    } catch (error) {
      console.error(`Error starting connect with database pg`);
      throw new Error(`Error starting connect with database pg`);
    }
  }
  get clientInstance() {
    return this.client;
  }
};
var database = new Database();

// src/repositories/pg/post.repository.ts
var PostRepository = class {
  async getAll(page, limit) {
    const offset = (page - 1) * limit;
    const result = await database.clientInstance?.query(
      `
      SELECT post.id, post.title, post.content, post.createdAt, teacher.id as idTeacher, teacher.name, teacher.school_subject
      FROM post
      INNER JOIN teacher
      ON post.teacher_id = teacher.id
      LIMIT $1 OFFSET $2
      `,
      [limit, offset]
    );
    return result?.rows || [];
  }
  async getOne(postId) {
    const result = await database.clientInstance?.query(
      `
      SELECT post.id, post.title, post.content, post.createdAt, teacher.id as idTeacher, teacher.name, teacher.school_subject
      FROM post
      INNER JOIN teacher
      ON post.teacher_id = teacher.id
      WHERE post.id = $1
      `,
      [postId]
    );
    return result?.rows[0];
  }
  async create({ title, content, teacher_id }) {
    const now = /* @__PURE__ */ new Date();
    const result = await database.clientInstance?.query(
      `
      INSERT INTO "post" (title, content, createdAt, teacher_id)
      VALUES ($1, $2, $3, $4) RETURNING *
      `,
      [title, content, now, teacher_id]
    );
    return result?.rows[0];
  }
  async updatePost(postId, { title, content }) {
    console.log(title, content);
    const result = await database.clientInstance?.query(
      `
      UPDATE post
      SET title = COALESCE($1, title), content = COALESCE($2, content)
      WHERE post.id = $3
      RETURNING *
      `,
      [title, content, postId]
    );
    console.log(result?.rows[0]);
    return result?.rows[0];
  }
  async deletePost(postId) {
    const result = await database.clientInstance?.query(
      `
      DELETE FROM post
      WHERE post.id = $1
      RETURNING *
      `,
      [postId]
    );
    return result?.rows[0];
  }
};

// src/use-cases/create-post.ts
var CreatePostUseCase = class {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }
  async handler(post) {
    return this.postRepository.create(post);
  }
};

// src/use-cases/factory/make-create-post.ts
function makeCreatePostUseCase() {
  const postRepository = new PostRepository();
  const createPostUseCase = new CreatePostUseCase(postRepository);
  return createPostUseCase;
}

// src/http/controllers/post/create.ts
var import_zod2 = require("zod");
async function create(request, reply) {
  const registerBodySchema = import_zod2.z.object({
    title: import_zod2.z.string(),
    content: import_zod2.z.string(),
    teacher_id: import_zod2.z.coerce.number()
  });
  const { title, content, teacher_id } = registerBodySchema.parse(request.body);
  const createPostUseCase = makeCreatePostUseCase();
  const post = await createPostUseCase.handler({ title, content, teacher_id });
  reply.status(201).send(post);
}

// src/use-cases/get-all-post.ts
var GetAllPostUseCase = class {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }
  async handler(page, limit) {
    return this.postRepository.getAll(page, limit);
  }
};

// src/use-cases/factory/make-find-all-post.ts
function makeFindAllPostUseCase() {
  const postRepository = new PostRepository();
  const getAllPostUseCase = new GetAllPostUseCase(postRepository);
  return getAllPostUseCase;
}

// src/http/controllers/post/getAll.ts
var import_zod3 = require("zod");
async function getAll(request, reply) {
  const registerQuerySchema = import_zod3.z.object({
    page: import_zod3.z.coerce.number().default(1),
    limit: import_zod3.z.coerce.number().default(10)
  });
  const { page, limit } = registerQuerySchema.parse(request.query);
  const getAllPostUseCase = makeFindAllPostUseCase();
  const result = await getAllPostUseCase.handler(page, limit);
  return reply.status(200).send(result);
}

// src/use-cases/errors/resource-not-fount-error.ts
var ResourceNotFoundError = class extends Error {
  constructor() {
    super("Resource Not Found");
    this.name = "ResourceNotFoundError";
  }
};

// src/use-cases/get-one-post.ts
var GetOnePostUseCase = class {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }
  async handler(postId) {
    const post = await this.postRepository.getOne(postId);
    if (!post) {
      throw new ResourceNotFoundError();
    }
    return post;
  }
};

// src/use-cases/factory/make-get-one-post.ts
function makeGetOnePostUseCase() {
  const postRepository = new PostRepository();
  const getOnePostUseCase = new GetOnePostUseCase(postRepository);
  return getOnePostUseCase;
}

// src/http/controllers/post/getOne.ts
var import_zod4 = require("zod");
async function getOne(request, reply) {
  const registerParamsSchema = import_zod4.z.object({
    postId: import_zod4.z.string()
  });
  const { postId } = registerParamsSchema.parse(request.params);
  const getOnePostUseCase = makeGetOnePostUseCase();
  const post = await getOnePostUseCase.handler(postId);
  return reply.status(200).send(post);
}

// src/http/middlewares/jwt-validate.ts
async function jwtValidate(request, reply) {
  try {
    const routeFreeList = ["POST-/user", "POST-/signin"];
    const validadeRoute = `${request.method}-${request.routeOptions.url}`;
    if (routeFreeList.includes(validadeRoute)) return;
    await request.jwtVerify();
  } catch (error) {
    return reply.status(401).send({ message: "Unauthorized" });
  }
}

// src/use-cases/delete-post.ts
var DeletePostUseCase = class {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }
  async handler(postId) {
    return this.postRepository.deletePost(postId);
  }
};

// src/use-cases/factory/make-delete-post.ts
function makeDeletePostUseCase() {
  const postRepository = new PostRepository();
  const deletePostUseCase = new DeletePostUseCase(postRepository);
  return deletePostUseCase;
}

// src/http/controllers/post/deletePost.ts
var import_zod5 = require("zod");
async function deletePost(request, reply) {
  const registerParamsSchema = import_zod5.z.object({
    postId: import_zod5.z.string()
  });
  const { postId } = registerParamsSchema.parse(request.params);
  const deletePostUseCase = makeDeletePostUseCase();
  const result = await deletePostUseCase.handler(postId);
  if (!result) throw new ResourceNotFoundError();
  return reply.status(200).send({ id: result.id });
}

// src/use-cases/update-post.ts
var UpdatePostUseCase = class {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }
  async handler(postId, post) {
    return this.postRepository.updatePost(postId, post);
  }
};

// src/use-cases/factory/make-update-post.ts
function makeUpdatePostUseCase() {
  const postRepository = new PostRepository();
  const updatePostUseCase = new UpdatePostUseCase(postRepository);
  return updatePostUseCase;
}

// src/http/controllers/post/updatePost.ts
var import_zod6 = require("zod");
async function UpdatePost(request, reply) {
  const registerParamsSchema = import_zod6.z.object({
    postId: import_zod6.z.string()
  });
  const { postId } = registerParamsSchema.parse(request.params);
  const registerBodySchema = import_zod6.z.object({
    title: import_zod6.z.string().optional(),
    content: import_zod6.z.string().optional()
  });
  const { title, content } = registerBodySchema.parse(request.body);
  const updatePostUseCase = makeUpdatePostUseCase();
  const result = await updatePostUseCase.handler(postId, { title, content });
  if (!result) throw new ResourceNotFoundError();
  return reply.status(200).send(result);
}

// src/lib/helper/swagger/post/create-post-schema.ts
var createPostSchema = {
  summary: "Post creation",
  description: "This method includes a new post in the blog",
  tags: ["post"],
  security: [{ bearerAuth: [] }],
  body: {
    type: "object",
    required: ["title", "content", "teacher_id"],
    properties: {
      title: { type: "string" },
      content: { type: "string" },
      teacher_id: { type: "number" }
    }
  },
  response: {
    201: {
      description: "Successful response",
      type: "object",
      properties: {
        title: { type: "string" },
        content: { type: "string" },
        teacher_id: { type: "number" }
      }
    }
  }
};

// src/lib/helper/swagger/post/get-all-post-schema.ts
var getAllPostSchema = {
  schema: {
    summary: "Get all post",
    description: "This method returns a list of registered posts in the blog",
    tags: ["post"],
    querystring: {
      page: {
        type: "number"
      },
      limit: {
        type: "number"
      }
    },
    response: {
      200: {
        description: "Successful response",
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            title: { type: "string" },
            content: { type: "string" },
            createdat: {
              type: "string",
              format: "date",
              example: "2022-07-01"
            },
            idteacher: { type: "number" },
            name: { type: "string" },
            school_subject: { type: "string" }
          }
        }
      }
    }
  }
};

// src/lib/helper/swagger/post/get-one-post.schema.ts
var getOnePostSchema = {
  schema: {
    summary: "Get one post",
    description: "This method returns one post by id",
    tags: ["post"],
    params: {
      postId: { type: "string", format: "uuid", description: "id of post" }
    },
    response: {
      200: {
        description: "Successful response",
        type: "object",
        properties: {
          id: { type: "string", format: "uuid" },
          title: { type: "string" },
          content: { type: "string" },
          createdat: {
            type: "string",
            format: "date",
            example: "2022-07-01"
          },
          idteacher: { type: "string" },
          name: { type: "string" },
          school_subject: { type: "string" }
        }
      }
    }
  }
};

// src/lib/helper/swagger/post/update-post-schema.ts
var updatePostSchema = {
  summary: "Update post",
  description: "This method updates one post by id",
  tags: ["post"],
  security: [{ bearerAuth: [] }],
  params: {
    postId: { type: "string", format: "uuid", description: "id of post" }
  },
  body: {
    type: "object",
    properties: {
      title: { type: "string" },
      content: { type: "string" }
    }
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        title: { type: "string" },
        content: { type: "string" }
      }
    }
  }
};

// src/lib/helper/swagger/post/remove-post-schema.ts
var removePostSchema = {
  summary: "Remove post",
  description: "This method removes one post by id",
  tags: ["post"],
  security: [{ bearerAuth: [] }],
  params: {
    postId: { type: "string", format: "uuid", description: "id of post" }
  },
  response: {
    200: {
      description: "Post successfully removed",
      type: "object",
      properties: {
        id: { type: "string", format: "uuid" }
      }
    }
  }
};

// src/http/controllers/post/routes.ts
async function postRoutes(app) {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  postRoutes
});
