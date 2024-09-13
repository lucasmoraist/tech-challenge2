export const searchPostSchema = {
  schema: {
    summary: "Get list of posts by term",
    description:
      "This method returns a list of registered posts in the blog by term",
    tags: ["v1"],
    querystring: {
      term: {
        type: "string",
      },
    },
    response: {
      200: {
        description: "Successful response",
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            title: { type: "string" },
            content: { type: "string" },
          },
        },
      },
    },
  },
};
