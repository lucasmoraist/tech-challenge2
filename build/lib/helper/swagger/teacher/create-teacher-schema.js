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

// src/lib/helper/swagger/teacher/create-teacher-schema.ts
var create_teacher_schema_exports = {};
__export(create_teacher_schema_exports, {
  createTeacherSchema: () => createTeacherSchema
});
module.exports = __toCommonJS(create_teacher_schema_exports);
var createTeacherSchema = {
  schema: {
    summary: "Teacher creation",
    description: "This method uncludes a new teacher",
    tags: ["teacher"],
    body: {
      type: "object",
      required: ["name", "school_subject"],
      properties: {
        name: { type: "string" },
        school_subject: { type: "string" },
        user_id: { type: "number" }
      }
    },
    response: {
      201: {
        description: "Successful response",
        type: "object",
        properties: {
          id: { type: "number" },
          name: { type: "string" },
          school_subject: { type: "string" }
        }
      }
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createTeacherSchema
});
