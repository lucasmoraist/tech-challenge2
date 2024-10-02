import { Post } from "@/domain/entities/post.entity";
import { Teacher } from "@/domain/entities/teacher.entity";
import { teacherSummary } from "@/domain/types/teacher-summary.type";
import { TeacherUpdateType } from "@/domain/types/teacher-update.type";

export interface ITeacherRepository {
  listAll(page: number, limit: number): Promise<teacherSummary>;
  getTeacherByUserId(userId: number): Promise<number>;
  getTeacherById(teacherId: number): Promise<Teacher & { posts: Post[] }>;
  create(teacher: Teacher): Promise<Teacher>;
  updateTeacher(teacherId: number, teacher: TeacherUpdateType): Promise<Teacher | null>;
  deleteTeacher(teacherId: number): Promise<Teacher | null>;
}
