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

// src/use-cases/signin-user.ts
var signin_user_exports = {};
__export(signin_user_exports, {
  SigninUserUseCase: () => SigninUserUseCase
});
module.exports = __toCommonJS(signin_user_exports);
var SigninUserUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async handler(username) {
    return this.userRepository.signin(username);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SigninUserUseCase
});