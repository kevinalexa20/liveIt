import { Box } from "@/components/ui/box";
import { ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlHelper,
} from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { LinkText } from "@/components/ui/link";
import { VStack } from "@/components/ui/vstack";
import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Button,
} from "react-native";

export default function Tab() {
  return (
    // <View style={styles.container}>
    //     <Text className="text-2xl font-bold text-primary-600 mb-4">Profile</Text>
    //     <Text className="text-typography-500 mb-6">Please log in to view and manage your profile</Text>

    //     <Link href="/auth" asChild>
    //       <TouchableOpacity className="bg-primary-500 py-4 px-8 rounded-lg">
    //         <Text className="text-typography-950 font-semibold">Sign In</Text>
    //       </TouchableOpacity>
    //     </Link>
    //   </View>

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}>
      <Box>
        <Center>
          <VStack space="lg" alignItems="center" w="$full" maxWidth="$96">
            {/* Logo */}
            {/* <Image
              source={require('./assets/logo.png')} // Replace with your logo
              alt="App Logo"
              size="lg"
              w="$32"
              h="$32"
              resizeMode="contain"
            /> */}

            <Heading size="xl" fontWeight="$bold" mb="$2">
              Welcome Back
            </Heading>
            <Text size="sm" color="$textLight500" mb="$6">
              Sign in to continue to your account
            </Text>

            {/* Form */}
            <VStack space="md" w="$full">
              {/* Email Input */}
              <FormControl isInvalid={isEmailInvalid}>
                <FormControl.Label>
                  <Text fontWeight="$medium">Email</Text>
                </FormControl.Label>
                <Input size="md" borderWidth="$1">
                  <InputField
                    placeholder="example@email.com"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                  />
                </Input>
                <FormControlError>
                  <FormControlErrorText>
                    Please enter a valid email
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>

              {/* Password Input */}
              <FormControl isInvalid={isPasswordInvalid}>
                <FormControl.Label>
                  <Text fontWeight="$medium">Password</Text>
                </FormControl.Label>
                <Input size="md" borderWidth="$1">
                  <InputField
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    type={showPassword ? "text" : "password"}
                  />
                  <InputSlot pr="$3" onPress={toggleShowPassword}>
                    <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                  </InputSlot>
                </Input>
                <FormControlError>
                  <FormControlErrorText>
                    Password must be at least 6 characters
                  </FormControlErrorText>
                </FormControlError>
                <FormControlHelper>
                  <HStack justifyContent="flex-end">
                    <Link>
                      <LinkText size="xs" color="$primary600">
                        Forgot Password?
                      </LinkText>
                    </Link>
                  </HStack>
                </FormControlHelper>
              </FormControl>

              {/* Login Button */}
              <Button
                size="md"
                variant="solid"
                action="primary"
                w="$full"
                onPress={handleLogin}
                mt="$4">
                <ButtonText>Sign In</ButtonText>
              </Button>
            </VStack>

            {/* Sign Up Link */}
            <HStack space="xs" mt="$6">
              <Text size="sm">Don't have an account?</Text>
              <Link>
                <LinkText size="sm" color="$primary600" fontWeight="$medium">
                  Sign Up
                </LinkText>
              </Link>
            </HStack>
          </VStack>
        </Center>
      </Box>
    </KeyboardAvoidingView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
