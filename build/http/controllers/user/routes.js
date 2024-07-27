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

// src/http/controllers/user/routes.ts
var routes_exports = {};
__export(routes_exports, {
  userRoutes: () => userRoutes
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

// src/use-cases/create-user.ts
var CreateUserUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async handler(user) {
    return this.userRepository.create(user);
  }
};

// src/use-cases/factory/make-create-user.ts
function makeCreateUserUseCase() {
  const userRepository = new UserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepository);
  return createUserUseCase;
}

// src/http/controllers/user/create.ts
var import_bcryptjs = require("bcryptjs");
var import_zod2 = require("zod");
async function create(request, reply) {
  const registerBodySchema = import_zod2.z.object({
    username: import_zod2.z.string(),
    password: import_zod2.z.string()
  });
  const { username, password } = registerBodySchema.parse(request.body);
  const hashedPassword = await (0, import_bcryptjs.hash)(password, 8);
  const userWithHashedPassword = { username, password: hashedPassword };
  const createUserUseCase = makeCreateUserUseCase();
  const user = await createUserUseCase.handler(userWithHashedPassword);
  return reply.status(201).send({ id: user.id, username: user.username });
}

// src/use-cases/errors/invalid-credential-error.ts
var InvalidCredentialError = class extends Error {
  constructor() {
    super("Username or password is invalid");
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
var import_bcryptjs2 = require("bcryptjs");
var import_zod3 = require("zod");
async function signin(request, reply) {
  const registerBodySchema = import_zod3.z.object({
    username: import_zod3.z.string(),
    password: import_zod3.z.string()
  });
  const { username, password } = registerBodySchema.parse(request.body);
  const signinUserUseCase = makeSigninUserUseCase();
  const user = await signinUserUseCase.handler(username);
  if (!user) {
    throw new InvalidCredentialError();
  }
  const doesPasswordMatch = await (0, import_bcryptjs2.compare)(password, user.password);
  if (!doesPasswordMatch) {
    throw new InvalidCredentialError();
  }
  const token = await reply.jwtSign({ username });
  return reply.status(200).send({ token });
}

// src/lib/helper/swagger/user/create-user-schema.ts
var createUserSchema = {
  schema: {
    summary: "User creation",
    description: "This method uncludes a new user",
    tags: ["user"],
    body: {
      type: "object",
      required: ["username", "password"],
      properties: {
        username: { type: "string" },
        password: { type: "string", format: "password" }
      }
    },
    response: {
      201: {
        description: "Successful response",
        type: "object",
        properties: {
          id: { type: "number" },
          username: { type: "string" }
        }
      }
    }
  }
};

// src/lib/helper/swagger/user/signin-user-schema.ts
var signinUserSchema = {
  schema: {
    summary: "User signin",
    description: "This method generates an access token for a registered user",
    tags: ["user"],
    body: {
      type: "object",
      required: ["username", "password"],
      properties: {
        username: { type: "string" },
        password: { type: "string", format: "password" }
      }
    },
    response: {
      200: {
        description: "Successful response",
        type: "object",
        properties: {
          token: { type: "string" }
        }
      }
    }
  }
};

// src/http/controllers/user/routes.ts
async function userRoutes(app) {
  app.post("/user", createUserSchema, create);
  app.post("/user/signin", signinUserSchema, signin);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  userRoutes
});
