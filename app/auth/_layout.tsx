import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Slot, Stack } from "expo-router";
import "@/global.css";
import { SafeAreaView } from "react-native";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";

// export const unstable_settings = {
//   initialRouteName: "index",
// };

export default function AuthLayout() {
  return (
    <GluestackUIProvider mode="light">
      {/* <Stack screenOptions={{ headerShown: false }} /> */}
      <SafeAreaView style={{ flex: 1 }} className="bg-background-100">
        <Slot />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
