import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { config } from "@/components/ui/gluestack-ui-provider/config";

export default function TabLayout() {
  const themeColors = config.dark;

  return (
    <GluestackUIProvider mode="light">
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#68B0AB",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#2C2C2C",
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Routine",
            tabBarIcon: ({ color }: { color: string }) => (
              <FontAwesome size={28} name="random" color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="inspire"
          options={{
            title: "Inspire",
            tabBarIcon: ({ color }: { color: string }) => (
              <FontAwesome size={28} name="star" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            title: "Library",
            tabBarIcon: ({ color }: { color: string }) => (
              <FontAwesome size={28} name="book" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }: { color: string }) => (
              <FontAwesome size={28} name="user" color={color} />
            ),
          }}
        />
      </Tabs>
    </GluestackUIProvider>
  );
}
