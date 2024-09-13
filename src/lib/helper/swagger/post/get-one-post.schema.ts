export const getOnePostSchema = {
  schema: {
    summary: "Get one post",
    description: "This method returns one post by id",
    tags: ["v1"],
    params: {
      postId: { type: "string", format: "uuid", description: "id of post" },
    },
    response: {
      200: {
        description: "Successful response",
        type: "object",
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
          idteacher: { type: "string" },
          name: { type: "string" },
          school_subject: { type: "string" },
        },
      },
    },
  },
};
