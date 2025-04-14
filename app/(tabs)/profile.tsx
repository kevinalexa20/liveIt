import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Link } from "expo-router";
import { Text } from "@/components/ui/text";
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
// import { Icon, SettingsIcon } from "@/components/ui/icon";
import { Icon, SettingsIcon } from "@/components/ui/icon";

export default function Tab() {
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-background-100">
      <Box className="justify-center p-8">
        {/* top bar icon profile and settings */}
        <Box className="items-end mb-4">
          <Icon as={SettingsIcon} className="w-8 h-8" />
        </Box>

        <Box className="mb-4">
          <Heading size="2xl">Profile</Heading>
        </Box>

        <Box className="mb-4 items-center">
          <FontAwesome size={64} name="user-circle-o" color={"#2F5D62"} />
        </Box>

        <VStack className="items-center">
          <Link href="/auth">
            <Heading size="xl">Sign up or log in here!</Heading>
          </Link>
          <Text>You are currenty in guest mode, please login to continue</Text>
        </VStack>
      </Box>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
