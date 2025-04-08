import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue",
      headerShown: false,
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
  );
}
