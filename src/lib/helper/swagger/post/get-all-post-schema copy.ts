export const getAllPostSchema = {
  summary: "Get all post",
  description: "This method returns the posts and their contents",
  tags: ["v2"],
  security: [{ bearerAuth: [] }],
  querystring: {
    page: {
      type: "number",
    },
    limit: {
      type: "number",
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
          createdat: {
            type: "string",
            format: "date",
            example: "2022-07-01",
          },
          idteacher: { type: "number" },
          name: { type: "string" },
          school_subject: { type: "string" },
        },
      },
    },
  },
};
