export interface PublicUser {
  profilePictureHash?: string | null;
  name?: string;
  userLanguages?: string[];
  username?: string;
  role?: string;
  private?: never;
  settings?: never;
}
export interface PrivateUser<Timestamp>
  extends Omit<PublicUser, 'private' | 'settings'> {
  private: {
    email?: string;
    emailVerified: boolean;
    phoneNumber?: string;
    accessFlags?: Partial<Record<string, boolean>> | null;
    tempPassword?: boolean;
    disabled: boolean;
    deviceTokens?: string[];
    subscribedTopics?: string[];
    notificationKey?: string | null;
    premium?: boolean;
    premiumIssuer?: 'MANUALLY' | 'APPLE' | 'GOOGLE';
    premiumEndDate?: Timestamp; // Generic type that takes type parameter named Timestamp instead (see receipt as an example)?
  };
  settings?: {
    interpreterNumber?: string;
    onboardingCompleted?: boolean;
    requisitionOn?: boolean;
    userType?: string[];
  };
}
