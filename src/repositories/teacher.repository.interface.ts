import { Teacher } from "@/entities/teacher.entity";
import { TeacherListType } from "@/types/teacher/teacher-list.type";
import { ITeacher } from "@/types/teacher/teacher-type";
import { TeacherUpdateType } from "@/types/teacher/teacher-update.type";

export interface ITeacherRepository {
  create(teacher: Teacher): Promise<Teacher>;
  getOne(user_id: number): Promise<ITeacher | null>;
  updateTeacher(teacherId: number, teacher: TeacherUpdateType): Promise<Teacher | null>;
  getAll(): Promise<TeacherListType[]>;
  deleteTeacher(teacherId: number): Promise<Teacher | null>;
}
