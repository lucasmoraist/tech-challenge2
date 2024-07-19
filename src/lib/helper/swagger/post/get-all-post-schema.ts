export const getAllPostSchema = {
  schema: {
    summary: "Get all post",
    description: "This method returns a list of registered posts in the blog",
    tags: ["post"],
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
            idteacher: { type: "string" },
            name: { type: "string" },
            school_subject: { type: "string" },
          },
        },
      },
    },
  },
};
