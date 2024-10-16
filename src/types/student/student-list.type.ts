import { Student } from "@/entities/student.entity";

export type StudentListType = Pick<Student, "id" | "name">;