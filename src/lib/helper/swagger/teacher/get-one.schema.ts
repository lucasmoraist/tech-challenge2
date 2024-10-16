export const getOneTeacherSchema = {
  summary: "Get one teacher",
  description: "This method returns one teacher by id",
  tags: ["v2"],
  security: [{ bearerAuth: [] }],
  params: {
    teacherId: { type: "number", description: "id of teacher" },
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        id: { type: "number" },
        name: { type: "string" },
        school_subject: { type: "string" },
        posts: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              createdAt: {
                type: "string",
                format: "date",
                example: "2022-07-01",
              },
            },
          },
        },
      },
    },
  },
};
