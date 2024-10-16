import { Teacher } from "@/entities/teacher.entity";

type PartialPost = Partial<Teacher>;

export type TeacherUpdateType = Pick<PartialPost, "name" | "school_subject">;
