import { Post } from "@/entities/post.entity";
import { Teacher } from "@/entities/teacher.entity";

export interface ITeacherRepository {
  create(teacher: Teacher): Promise<Teacher>;
  getTeacherByUserId(userId: number): Promise<number>;
  getTeacherById(teacherId: number): Promise<Teacher & { posts: Post[] }>;
}
