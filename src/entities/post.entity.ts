import { IPost } from "./models/post.interface";

export class Post implements IPost {
  id?: number | undefined;
  title: string;
  content: string;
  createdAt?: Date;
  teacher_id?: string | undefined;
}
