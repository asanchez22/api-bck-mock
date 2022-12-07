export interface ApiResponse<T> {
  hasItems: boolean;
  items: T[];
  total: number;
  page: number;
  pages: number;
}
