import { ResourceNotFoundError } from "../errors/resource-not-fount-error";

export class GetOneTeacherUseCase {
  constructor(private readonly teacherRepository: any) {}

  async handler(user_id: number): Promise<any> {
    const teacher = await this.teacherRepository.getOne(user_id);
    
    if (!teacher) {
      throw new ResourceNotFoundError();
    }
    return teacher;
  }
}
