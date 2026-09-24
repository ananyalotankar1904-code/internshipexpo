export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: any;
}

export interface StudentRegistrationData {
  email: string;
  fullName: string;
  branch: string;
  year: number;
}
