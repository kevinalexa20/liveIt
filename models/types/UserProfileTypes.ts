export interface UserProfile {
  id: string;
  userId: string;
  email: string;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  profileImage?: string;
  bio?: string;
  birthDate?: string;
  location?: string;
  preferences?: {
    darkMode?: boolean;
    notifications?: boolean;
    language?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface ProfileUpdateData {
  displayName?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  profileImage?: string;
  bio?: string;
  birthDate?: string;
  location?: string;
  preferences?: {
    darkMode?: boolean;
    notifications?: boolean;
    language?: string;
  };
}