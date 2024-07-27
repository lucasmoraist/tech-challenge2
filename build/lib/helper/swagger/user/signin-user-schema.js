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

// src/lib/helper/swagger/user/signin-user-schema.ts
var signin_user_schema_exports = {};
__export(signin_user_schema_exports, {
  signinUserSchema: () => signinUserSchema
});
module.exports = __toCommonJS(signin_user_schema_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  signinUserSchema
});
