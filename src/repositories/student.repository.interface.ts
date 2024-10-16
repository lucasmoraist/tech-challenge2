import { studentSummary } from "@/types/student/student-summary.type";
import { IStudent } from "@/types/student/student.type";

export interface IStudentRepository {
    create(student: IStudent): Promise<IStudent>;
    listAll(page: number, limit: number): Promise<studentSummary>;
    getOne(studentId: number): Promise<IStudent | null>;
    updateStudent(studentId: number, student: IStudent): Promise<IStudent | null>;
    deleteStudent(studentId: number): Promise<IStudent | null>;
}