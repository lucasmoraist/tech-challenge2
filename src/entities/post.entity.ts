export interface Post {
  id?: string | undefined;
  title: string;
  content: string;
  createdAt?: Date;
  teacher_id?: number | undefined;
}
