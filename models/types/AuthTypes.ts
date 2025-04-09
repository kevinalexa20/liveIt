
export interface AuthSession {
  userId: string;
  email: string;
  name?: string;
  isLoggedIn: boolean;
  expires: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name?: string;
}

export interface PasswordReset {
  userId: string;
  secret: string;
  password: string;
  confirmPassword: string;
}

export interface PasswordUpdate {
  currentPassword: string;
  newPassword: string;
}