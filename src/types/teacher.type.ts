import { Teacher } from "@/entities/teacher.entity";

export type TeacherType = Pick<
    Teacher,
    "id" | "name" | "school_subject"
>