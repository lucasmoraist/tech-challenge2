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

// src/use-cases/get-one-post.ts
var get_one_post_exports = {};
__export(get_one_post_exports, {
  GetOnePostUseCase: () => GetOnePostUseCase
});
module.exports = __toCommonJS(get_one_post_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GetOnePostUseCase
});