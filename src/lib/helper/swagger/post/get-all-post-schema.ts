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
      type: "object",
      properties: {
        currentPage: { page: "number" },
        itemsPerPage: { page: "number" },
        totalNumberOfPages: { page: "number" },
        posts: {
          type: "array",
          properties: {
            id: { type: "string", format: "uuid" },
            title: { type: "string" },
            content: { type: "string" },
            urlimage: { type: "string" },
            createdat: {
              type: "string",
              format: "date",
              example: "2022-07-01",
            },
          },
        },
      },
    },
  },
};
