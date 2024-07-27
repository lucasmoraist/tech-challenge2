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

// src/use-cases/factory/make-create-post.ts
var make_create_post_exports = {};
__export(make_create_post_exports, {
  makeCreatePostUseCase: () => makeCreatePostUseCase
});
module.exports = __toCommonJS(make_create_post_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  makeCreatePostUseCase
});
