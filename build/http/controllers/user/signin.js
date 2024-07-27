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

// src/http/controllers/user/signin.ts
var signin_exports = {};
__export(signin_exports, {
  signin: () => signin
});
module.exports = __toCommonJS(signin_exports);

// src/use-cases/errors/invalid-credential-error.ts
var InvalidCredentialError = class extends Error {
  constructor() {
    super("Username or password is invalid");
  }
};

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

// src/repositories/pg/user.repository.ts
var UserRepository = class {
  async signin(username) {
    const result = await database.clientInstance?.query(
      `
      SELECT * FROM "user"
      WHERE "user".username = $1
      `,
      [username]
    );
    return result?.rows[0];
  }
  async create({ username, password }) {
    const result = await database.clientInstance?.query(
      `
      INSERT INTO "user" (username, password) VALUES($1, $2) RETURNING *
      `,
      [username, password]
    );
    return result?.rows[0];
  }
};

// src/use-cases/signin-user.ts
var SigninUserUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async handler(username) {
    return this.userRepository.signin(username);
  }
};

// src/use-cases/factory/make-signin-user.ts
function makeSigninUserUseCase() {
  const userRepository = new UserRepository();
  const signinUserUseCase = new SigninUserUseCase(userRepository);
  return signinUserUseCase;
}

// src/http/controllers/user/signin.ts
var import_bcryptjs = require("bcryptjs");
var import_zod2 = require("zod");
async function signin(request, reply) {
  const registerBodySchema = import_zod2.z.object({
    username: import_zod2.z.string(),
    password: import_zod2.z.string()
  });
  const { username, password } = registerBodySchema.parse(request.body);
  const signinUserUseCase = makeSigninUserUseCase();
  const user = await signinUserUseCase.handler(username);
  if (!user) {
    throw new InvalidCredentialError();
  }
  const doesPasswordMatch = await (0, import_bcryptjs.compare)(password, user.password);
  if (!doesPasswordMatch) {
    throw new InvalidCredentialError();
  }
  const token = await reply.jwtSign({ username });
  return reply.status(200).send({ token });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  signin
});
