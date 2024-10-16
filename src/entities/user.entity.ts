export interface User {
  id?: number | undefined;
  username: string;
  password: string;
  role: "teacher" | "student";
}
