import { Teacher } from "@/entities/teacher.entity";

export interface ITeacherRepository {
  create(teacher: Teacher): Promise<Teacher>;
}
