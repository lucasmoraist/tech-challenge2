export const updatePostSchema = {
  summary: "Update post",
  description: "This method updates one post by id",
  tags: ["post"],
  security: [{ bearerAuth: [] }],
  params: {
    postId: { type: "string", format: "uuid", description: "id of post" },
  },
  body: {
    type: "object",
    properties: {
      title: { type: "string" },
      content: { type: "string" },
    },
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        title: { type: "string" },
        content: { type: "string" },
      },
    },
  },
};
