import { TeacherType } from "./teacher.type";

export interface teacherSummary {
  currentPage: number | null;
  itemsPerPage: number | null;
  totalNumberOfPages: number | null;
  teachers?: TeacherType[];
}
