import { Post } from "@/domain/entities/post.entity";
import { Teacher } from "@/domain/entities/teacher.entity";

export type PostTeacherType = Pick<
  Post,
  "id" | "title" | "content" | "urlImage" | "createdAt" | "teacher_id"
> &
  Pick<Teacher, "name" | "school_subject">;
