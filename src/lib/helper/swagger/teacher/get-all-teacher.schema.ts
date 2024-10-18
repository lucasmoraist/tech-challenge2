export const getListTeacherSchema = {
  schema: {
    summary: "Get list of teacher",
    description: "This method returns a list of teachers",
    tags: ["teacher"],
    response: {
      200: {
        description: "Successful response",
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            name: { type: "string" },
            school_subject: { type: "string" },
          },
        },
      },
    },
  },
};
