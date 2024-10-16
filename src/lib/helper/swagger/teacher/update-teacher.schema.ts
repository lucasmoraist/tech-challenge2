export const updateTeacherSchema = {
    summary: "Update teacher",
    description: "This method updates one teacher by id",
    tags: ["v2"],
    security: [{ bearerAuth: [] }],
    params: {
      teacherId: { type: "number", description: "id of teacher" },
    },
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        school_subject: { type: "string" },
      },
    },
    response: {
      200: {
        description: "Successful response",
        type: "object",
        properties: {
          id: { type: "number" },
          name: { type: "string" },
          school_subject: { type: "string" },
        },
      },
    },
  };
  