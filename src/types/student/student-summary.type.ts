import { IStudent } from "./student.type";

export type studentSummary = {
  currentPage: number | null;
  itemsPerPage: number | null;
  totalNumberOfPages: number | null;
  students?: IStudent[];
};
