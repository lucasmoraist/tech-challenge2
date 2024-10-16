import { Teacher } from "@/entities/teacher.entity";
import { TeacherListType } from "@/types/teacher-list.type";
import { ITeacher } from "@/types/teacher-type";
import { TeacherUpdateType } from "@/types/teacher-update.type";

export interface ITeacherRepository {
  create(teacher: Teacher): Promise<Teacher>;
  getName(id: number): Promise<string>;
  getOne(teacherId: number): Promise<ITeacher | null>;
  updateTeacher(teacherId: number, teacher: TeacherUpdateType): Promise<Teacher | null>;
  getAll(): Promise<TeacherListType[]>;
}
