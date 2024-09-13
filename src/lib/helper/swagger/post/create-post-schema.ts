export const createPostSchema = {
  summary: "Post creation",
  description: "This method includes a new post in the blog",
  tags: ["v2"],
  security: [{ bearerAuth: [] }],
  body: {
    type: "object",
    required: ["title", "content", "teacher_id"],
    properties: {
      title: { type: "string" },
      content: { type: "string" },
      urlImage: { type: "string" },
      teacher_id: { type: "number" },
    },
  },
  response: {
    201: {
      description: "Successful response",
      type: "object",
      properties: {
        id: { type: "string" },
        title: { type: "string" },
        content: { type: "string" },
        urlImage: { type: "string" },
        createdat: { type: "string" },
        teacher_id: { type: "number" },
      },
    },
  },
};
