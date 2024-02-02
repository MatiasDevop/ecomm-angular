export interface ApiResponse<T = null> {
  data?: T; // You can replace 'any' with the actual type of data if known
  message: string;
  result: boolean;
}
