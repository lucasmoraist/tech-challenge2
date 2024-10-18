export const createStudentSchema = {
  schema: {
    summary: "Student creation",
    description: "This method uncludes a new student",
    tags: ["student"],
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
        user_id: { type: "number" },
      },
    },
    response: {
      201: {
        description: "Successful response",
        type: "object",
        properties: {
          id: { type: "number" },
          name: { type: "string" },
          user_id: { type: "number" },
        },
      },
    },
  },
};
