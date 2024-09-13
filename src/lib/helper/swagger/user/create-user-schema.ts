export const createUserSchema = {
  schema: {
    summary: "User creation",
    description: "This method uncludes a new user",
    tags: ["v1"],
    body: {
      type: "object",
      required: ["username", "password"],
      properties: {
        username: { type: "string" },
        password: { type: "string", format: "password" },
      },
    },

    response: {
      201: {
        description: "Successful response",
        type: "object",
        properties: {
          id: { type: "number" },
          username: { type: "string" },
        },
      },
    },
  },
};
