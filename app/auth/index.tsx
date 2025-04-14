import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import React from "react";
import { Button, ButtonText } from "@/components/ui/button";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
} from "@/components/ui/form-control";
import {
  AlertCircleIcon,
  EyeIcon,
  EyeOffIcon,
  Icon,
} from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const router = useRouter();

  // const handleLogin = () => {
  //   // Add your authentication logic here
  //   // When successful:
  //   router.replace("/(tabs)");
  // };

  // 1. State untuk visibility password
  const [showPassword, setShowPassword] = useState(false);

  // 3. Fungsi untuk toggle visibility
  const handleState = () => {
    setShowPassword((showState) => !showState);
  };

  const [isInvalid, setIsInvalid] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const handleSubmit = () => {
    if (inputValue.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };

  return (
    <Box className="bg-background-100 p-8 ">
      {/* Logo */}
      <Box className="flex-row items-center justify-center mt-10">
        <Image
          // size="sm"
          source={require("../../assets/images/pip-logo.png")}
          alt="Live It Logo"
          className="w-10 h-14 mr-2"
        />
        <Heading className="text-3xl mt-4">LiveIt</Heading>
      </Box>

      {/* Welcome message */}
      <Box className="mt-14">
        <Heading size="xl">Welcome Back!</Heading>
        <Text className="text-typography-500">Login to your account</Text>
      </Box>

      {/* Login form  */}
      <VStack className="w-full rounded-lg mt-8">
        <FormControl
          isInvalid={isInvalid}
          size="md"
          isDisabled={false}
          isReadOnly={false}
          isRequired={false}>
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>

          <Input className="my-1" size={"lg"}>
            <InputField
              type="text"
              placeholder="Email Address"
              // value={inputValue}
              // onChangeText={(text) => setInputValue(text)}
            />
          </Input>
        </FormControl>
        <FormControl
          isInvalid={isInvalid}
          size="md"
          isDisabled={false}
          isReadOnly={false}
          isRequired={false}>
          <FormControlLabel>
            <FormControlLabelText>Password</FormControlLabelText>
          </FormControlLabel>

          <Input className="my-1" size={"lg"}>
            <InputField
              type={showPassword ? "text" : "password"}
              placeholder="password"
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
            />
            <InputSlot className="pr-3" onPress={handleState}>
              <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
            </InputSlot>
          </Input>
          <FormControlHelper>
            <FormControlHelperText>
              Must be atleast 6 characters.
            </FormControlHelperText>
          </FormControlHelper>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              Atleast 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        {/* Button */}
        <Button className="w-fit mt-4" size="lg" onPress={handleSubmit}>
          <ButtonText>Login</ButtonText>
        </Button>
        <Link href="/auth/signup" asChild>
          <Button
            size="lg"
            variant="outline"
            action="primary"
            className="w-fit mt-4">
            <ButtonText>Don't have an account? Sign up</ButtonText>
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}
