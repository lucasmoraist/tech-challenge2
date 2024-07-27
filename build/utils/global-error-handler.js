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

// src/utils/global-error-handler.ts
var global_error_handler_exports = {};
__export(global_error_handler_exports, {
  globalErrorHandler: () => globalErrorHandler
});
module.exports = __toCommonJS(global_error_handler_exports);

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

// src/use-cases/errors/invalid-credential-error.ts
var InvalidCredentialError = class extends Error {
  constructor() {
    super("Username or password is invalid");
  }
};

// src/use-cases/errors/resource-not-fount-error.ts
var ResourceNotFoundError = class extends Error {
  constructor() {
    super("Resource Not Found");
    this.name = "ResourceNotFoundError";
  }
};

// src/utils/global-error-handler.ts
var import_pg = require("pg");
var import_zod2 = require("zod");
function globalErrorHandler(error, _, reply) {
  if (env.NODE_ENV === "development") {
    console.error(error);
  }
  if (error instanceof import_zod2.ZodError) {
    return reply.status(400).send({ message: "Validation Error", errors: error.format() });
  }
  if (error instanceof import_pg.DatabaseError) {
    return reply.status(400).send({ message: "Integrity Error", errors: error.message });
  }
  if (error instanceof ResourceNotFoundError) {
    return reply.status(404).send({ message: error.message });
  }
  if (error instanceof InvalidCredentialError) {
    return reply.status(401).send({ message: error.message });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  globalErrorHandler
});
