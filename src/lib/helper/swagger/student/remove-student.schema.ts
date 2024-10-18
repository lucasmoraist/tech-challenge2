export const removeStudentSchema = {
    summary: "Remove student",
    description: "This method removes one student by id",
    tags: ["student"],
    security: [{ bearerAuth: [] }],
    params: {
      studentId: { type: "number", description: "id of student" },
    },
    response: {
      200: {
        description: "Student successfully removed",
        type: "object",
        properties: {
          id: { type: "number" },
        },
      },
    },
  };
  