export const getListPostSchema = {
  schema: {
    summary: "Get list of post",
    description: "This method returns a list of posts",
    tags: ["posts"],
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
