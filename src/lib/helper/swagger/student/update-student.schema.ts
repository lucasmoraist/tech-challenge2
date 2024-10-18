export const updateStudentSchema = {
    summary: "Update student",
    description: "This method updates one student by id",
    tags: ["student"],
    security: [{ bearerAuth: [] }],
    params: {
      studentId: { type: "number", description: "id of student" },
    },
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
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
  