import { IPost } from "./models/post.interface";

export class Post implements IPost {
  id?: string | undefined;
  title: string;
  content: string;
  createdAt?: Date;
  teacher_id?: number | undefined;
}
