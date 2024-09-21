export const signinUserSchema = {
  schema: {
    summary: "User signin",
    description: "This method generates an access token for a registered user",
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
      200: {
        description: "Successful response",
        type: "object",
        properties: {
          user_id: { type: "string" },
          teacher_name: { type: "string" },
          token: { type: "string" },
        },
      },
    },
  },
};
