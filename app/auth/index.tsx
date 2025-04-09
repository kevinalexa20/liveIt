import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Link, useRouter } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Add your authentication logic here
    // When successful:
    router.replace("/(tabs)");
  };

  return (
    <View className="flex-1 bg-background-50 justify-center px-6">
      <View className="mb-10">
        <Text className="text-3xl font-bold text-primary-700 mb-2">
          Welcome back
        </Text>
        <Text className="text-typography-500">Sign in to continue</Text>
      </View>

      <View className="space-y-4 mb-6">
        <View>
          <Text className="text-sm text-typography-700 mb-1">Email</Text>
          <TextInput
            className="bg-background-100 p-4 rounded-lg text-typography-900"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View>
          <Text className="text-sm text-typography-700 mb-1">Password</Text>
          <TextInput
            className="bg-background-100 p-4 rounded-lg text-typography-900"
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <TouchableOpacity
        className="bg-primary-500 py-4 rounded-lg items-center mb-4"
        onPress={handleLogin}>
        <Text className="text-typography-950 font-semibold">Sign In</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center">
        <Text className="text-typography-500">Don't have an account? </Text>
        <Link href="/auth/signup" asChild>
          <TouchableOpacity>
            <Text className="text-tertiary-600 font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
