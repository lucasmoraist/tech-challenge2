export const createTeacherSchema = {
  schema: {
    summary: "Teacher creation",
    description: "This method uncludes a new teacher",
    tags: ["v1"],
    body: {
      type: "object",
      required: ["name", "school_subject"],
      properties: {
        name: { type: "string" },
        school_subject: { type: "string" },
        user_id: { type: "number" },
      },
    },
    response: {
      201: {
        description: "Successful response",
        type: "object",
        properties: {
          id: { type: "number" },
          name: { type: "string" },
          school_subject: { type: "string" },
        },
      },
    },
  },
};
