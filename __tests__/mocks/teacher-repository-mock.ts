import { Teacher } from "../../src/entities/teacher.entity";
import { ITeacherRepository } from "../../src/repositories/teacher.repository.interface";

const teachers: Teacher[] = [
  {
    id: 6,
    name: "Joana Dark",
    school_subject: "Matemática",
    user_id: 6,
  },
  {
    id: 7,
    name: "Xica da Silva",
    school_subject: "Educação Física",
    user_id: 7,
  },
];

export class TeacherRepositoryMock implements ITeacherRepository {
  create(teacher: Teacher): Promise<Teacher> {
    teacher.id = 8;
    teachers.push(teacher);
    return Promise.resolve(teacher);
  }
}
