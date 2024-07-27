import { Post } from "@/entities/post.entity";
import { Teacher } from "@/entities/teacher.entity";

export type PostTeacherType = Pick<
  Post,
  "id" | "title" | "content" | "createdAt" | "teacher_id"
> &
  Pick<Teacher, "name" | "school_subject">;
