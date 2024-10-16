import { Teacher } from "@/entities/teacher.entity";

export type TeacherListType = Pick<Teacher, "id" | "name" | "school_subject">;