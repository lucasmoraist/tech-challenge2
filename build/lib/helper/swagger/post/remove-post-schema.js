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

// src/lib/helper/swagger/post/remove-post-schema.ts
var remove_post_schema_exports = {};
__export(remove_post_schema_exports, {
  removePostSchema: () => removePostSchema
});
module.exports = __toCommonJS(remove_post_schema_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  removePostSchema
});
