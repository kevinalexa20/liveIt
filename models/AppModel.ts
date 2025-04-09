// import { AuthSession, LoginCredentials, RegisterData, PasswordReset, PasswordUpdate } from './types/AuthTypes';
// import { UserProfile, ProfileUpdateData } from './types/UserProfileTypes';

import {
  AuthSession,
  LoginCredentials,
  RegisterData,
  PasswordReset,
  PasswordUpdate,
} from "./types/AuthTypes";
import { UserProfile, ProfileUpdateData } from "./types/UserProfileTypes";

// Re-export all types
export {
  // Auth types
  AuthSession,
  LoginCredentials,
  RegisterData,
  PasswordReset,
  PasswordUpdate,

  // User profile types
  UserProfile,
  ProfileUpdateData,
};

// Add any utility functions for model transformations if needed
export const mapApiProfileToUserProfile = (apiProfile: any): UserProfile => {
  return {
    id: apiProfile.$id,
    userId: apiProfile.userId,
    email: apiProfile.email,
    displayName: apiProfile.displayName,
    firstName: apiProfile.firstName,
    lastName: apiProfile.lastName,
    phoneNumber: apiProfile.phoneNumber,
    profileImage: apiProfile.profileImage,
    bio: apiProfile.bio,
    birthDate: apiProfile.birthDate,
    location: apiProfile.location,
    preferences: apiProfile.preferences,
    createdAt: apiProfile.createdAt,
    updatedAt: apiProfile.updatedAt,
  };
};
