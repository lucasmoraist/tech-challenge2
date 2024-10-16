export const removeTeacherSchema = {
    summary: "Remove teacher",
    description: "This method removes one teacher by id",
    tags: ["v2"],
    security: [{ bearerAuth: [] }],
    params: {
      teacherId: { type: "number", description: "id of teacher" },
    },
    response: {
      200: {
        description: "Teacher successfully removed",
        type: "object",
        properties: {
          id: { type: "number" },
        },
      },
    },
  };
  