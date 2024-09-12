export const removePostSchema = {
  summary: "Remove post",
  description: "This method removes one post by id",
  tags: ["v2"],
  security: [{ bearerAuth: [] }],
  params: {
    postId: { type: "string", format: "uuid", description: "id of post" },
  },
  response: {
    200: {
      description: "Post successfully removed",
      type: "object",
      properties: {
        id: { type: "string", format: "uuid" },
      },
    },
  },
};
