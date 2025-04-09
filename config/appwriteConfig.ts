import { Client, Account, Databases, ID } from "react-native-appwrite";
import { Platform } from "react-native";

const config = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  db: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
  col: {
    // tasks: process.env.EXPO_PUBLIC_APPWRITE_COL_TASKS_ID,
    profiles: process.env.EXPO_PUBLIC_APPWRITE_COL_PROFILES_ID,
  },
};

const client = new Client()
  .setEndpoint(config.endpoint!) //
  .setProject(config.projectId!);

switch (Platform.OS) {
  case "ios":
    client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_IOS_PLATFORM_ID!);
  case "android":
    client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_ANDROID_PLATFORM_ID!);

    break;
}

const account = new Account(client);

const database = new Databases(client);

export { config, client, account, database };
