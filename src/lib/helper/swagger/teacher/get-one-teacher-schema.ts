export const getOneTeacherSchema = {
  schema: {
    summary: "Get one teacher",
    description: "This method returns one teacher by id",
    tags: ["v2"],
    params: {
      teacherId: {
        type: "string",
        format: "number",
        description: "id of teacher",
      },
    },
    response: {
      200: {
        description: "Successful response",
        type: "object",
        properties: {
          id: { type: "string", format: "number" },
          name: { type: "string" },
          school_subject: { type: "string" },
          user_id: { type: "number" },
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
  },
};
