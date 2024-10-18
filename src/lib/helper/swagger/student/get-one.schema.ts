export const getOneStudentSchema = {
  summary: "Get one student",
  description: "This method returns one student by id",
  tags: ["student"],
  security: [{ bearerAuth: [] }],
  params: {
    studentId: { type: "number", description: "id of student" },
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        id: { type: "number" },
        name: { type: "string" },
        user_id: { type: "number" },
      },
    },
  },
};
