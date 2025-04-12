import { Text, View, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-background-50">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 py-2 bg-background-100">
        <Text className="text-lg font-bold text-typography-90`0">Today</Text>
        <Text className="text-sm text-typography-500">...</Text>
      </View>

      {/* Date Selector */}
      <View className="flex-row justify-around items-center py-4 bg-background-50">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
          <View
            key={index}
            className={`items-center ${
              day === "Tue" ? "text-primary-500" : "text-typography-500"
            }`}>
            <Text className="text-sm">{day}</Text>
            {day === "Tue" && (
              <View className="w-2 h-2 rounded-full bg-primary-500 mt-1" />
            )}
          </View>
        ))}
      </View>

      {/* Task List */}
      <View className="flex-1 px-4">
        <Text className="text-sm text-typography-500 mb-2">All</Text>
        <View className="flex-row items-center justify-between bg-background-100 p-4 rounded-lg shadow-soft-1">
          <Text className="text-base text-typography-900">Anytime</Text>
          <Text className="text-sm text-success-500">writing</Text>
        </View>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity className="absolute bottom-4 right-4 w-12 h-12 bg-primary-500 rounded-full items-center justify-center shadow-hard-2">
        <Text className="text-white text-lg">+</Text>
      </TouchableOpacity>
    </View>
  );
}
