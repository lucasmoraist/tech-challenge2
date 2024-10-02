import { Teacher } from "@/domain/entities/teacher.entity";

type PartialTeacher = Partial<Teacher>;

export type TeacherUpdateType = Pick<
    PartialTeacher,
    "name" | "school_subject"
>