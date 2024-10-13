import { Teacher } from "@/entities/teacher.entity";
import { ITeacher } from "@/types/teacher-type";

export interface ITeacherRepository {
  create(teacher: Teacher): Promise<Teacher>;
  getName(id: number): Promise<string>;
  getOne(teacherId: number): Promise<ITeacher | null>;
}
