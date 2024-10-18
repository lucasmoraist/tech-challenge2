import { Student } from "@/entities/student.entity";
import { IStudentRepository } from "@/repositories/student.repository.interface";
import { studentSummary } from "@/types/student/student-summary.type";
import { IStudent } from "@/types/student/student.type";

const students: Student[] = [
    {
        id: 1,
        name: "Joana Dark",
    },
    {
        id: 2,
        name: "Xica da Silva",
    },
]

let student: Student = {
    id: 1,
    name: "",
}

let _students: Student[] = [];

export class StudentRepositoryMock implements IStudentRepository {
    create(student: IStudent): Promise<IStudent> {
        student.id = 3;
        students.push(student);
        return Promise.resolve(student);
    }
    listAll(page: number, limit: number): Promise<studentSummary> {
        const studentList: studentSummary = {
            currentPage: 1,
            itemsPerPage: 10,
            totalNumberOfPages: 1,
            students: students,
        }
        return Promise.resolve(studentList);
    }
    getOne(studentId: number): Promise<IStudent | null> {
        const student = students.find((i) => i.id === studentId) || null;
        return Promise.resolve(student);
    }
    updateStudent(studentId: number, _student: IStudent): Promise<IStudent | null> {
        if (_student.name && _student != null) student.name = _student.name;

        return Promise.resolve(student);
    }
    deleteStudent(studentId: number): Promise<IStudent | null> {
        const indexStudents = _students.findIndex((i) => i.id === studentId);
        const deleteDTeacher = _students[indexStudents]
        _students.splice(indexStudents, 1);

        return Promise.resolve(deleteDTeacher || null);
    }
}