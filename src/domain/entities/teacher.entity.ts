import { Post } from "./post.entity";

export interface Teacher {
  id?: number | undefined;
  name: string;
  school_subject: string;
  user_id?: number | undefined;
  posts: Post[] | [];
}
