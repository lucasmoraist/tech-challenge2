import { ResourceNotFoundError } from "../errors/resource-not-fount-error";

export class GetOneTeacherUseCase {
  constructor(private readonly teacherRepository: any) {}

  async handler(teacherId: number): Promise<any> {
    const teacher = await this.teacherRepository.getOne(teacherId);
    if (!teacher) {
      throw new ResourceNotFoundError();
    }
    return teacher;
  }
}
