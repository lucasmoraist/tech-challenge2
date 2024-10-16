import { Student } from "@/entities/student.entity";

type PartialStudent = Partial<Student>;

export type StudentUpdateType = Pick<PartialStudent, "name">;
