export const getListStudentSchema = {
  summary: "Get list of student",
  description: "This method returns a list of students",
  tags: ["student"],
  security: [{ bearerAuth: [] }],
  response: {
    200: {
      description: "Successful response",
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string", format: "uuid" },
          name: { type: "string" },
        },
      },
    },
  },
};
