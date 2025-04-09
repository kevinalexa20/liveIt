import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import "@/global.css";

// export const unstable_settings = {
//   initialRouteName: "index",
// };

export default function AuthLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack screenOptions={{ headerShown: false }} />
      {/* <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} /> */}
    </GluestackUIProvider>
  );
}
