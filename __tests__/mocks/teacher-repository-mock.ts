import { Teacher } from "@/entities/teacher.entity";
import { ITeacherRepository } from "@/repositories/teacher.repository.interface";
import { TeacherListType } from "@/types/teacher/teacher-list.type";
import { ITeacher } from "@/types/teacher/teacher-type";
import { TeacherUpdateType } from "@/types/teacher/teacher-update.type";

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

const teacherInfo: ITeacher[] = [
  {
    id: 6,
    name: "Joana Dark",
    school_subject: "Matemática",
    posts: [
      {
        title: "A guerra dos cem anos",
        createdAt: new Date("2024-07-20"),
      },
      {
        title: "Os Lusíadas",
        createdAt: new Date("2024-07-20"),
      },
    ],
  },
];

let teacher: Teacher = {
  id: 1,
  name: "",
  school_subject: "",
  user_id: 1,
}

let _teachers: Teacher[] = [];

export class TeacherRepositoryMock implements ITeacherRepository {
  create(teacher: Teacher): Promise<Teacher> {
    teacher.id = 8;
    teachers.push(teacher);
    return Promise.resolve(teacher);
  }

  getName(id: number): Promise<string> {
    const teacherName = teachers.find((i) => i.id === id)?.name || "";
    return Promise.resolve(teacherName);
  }

  getOne(teacherId: number): Promise<ITeacher | null> {
    const oneTeacher = teacherInfo.find((i) => i.id === teacherId) ?? null;

    return Promise.resolve(oneTeacher) || null;
  }

  updateTeacher(
    teacherId: number,
    _teacher: TeacherUpdateType
  ): Promise<Teacher | null> {
    if (_teacher.name && _teacher.name != "") teacher.name = _teacher.name;
    if (_teacher.school_subject && _teacher.school_subject != "") teacher.school_subject = _teacher.school_subject;

    return Promise.resolve(teacher) || null;
  }

  getAll(): Promise<TeacherListType[]> {
    return Promise.resolve(teachers);
  }

  deleteTeacher(teacherId: number): Promise<Teacher | null> {
    const indexTeacher = _teachers.findIndex((i) => i.id === teacherId);
    const deletedTeacher = _teachers[indexTeacher];
    _teachers.splice(indexTeacher, 1);

    return Promise.resolve(deletedTeacher) || null;
  }
}
