import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  HStack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useToast, WrapItem, Wrap } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// eve.holt@reqres.in
// cityslicka
export default function LogInPop() {
  const Navigate=useNavigate();
  const toast=useToast()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("md3522817@gmail.com");
  const [password, setPassword] = useState("1234");
  const { login, logout, isAuth, handleActivity } = useContext(AuthContext);

  const details = {
    email,
    password,
  };
  // https://reqres.in/api/login

  const loginSubmit = () => {
    axios
      .get("https://flowers-wdds.onrender.com/users")
      .then((res) =>
       {
     const users=res.data;
     console.log(users)
     let find=users.filter((item)=>item.email==email);
     console.log(find);

     if(!find.length){
      toast({
        title: "User Not found ",
        position: ["top"],
        isClosable: true,
      });
      toast({
        title: "Go for registration ",
        position: ["top"],
        isClosable: true,
      });
     }
     else{
      if(find[0].password===password){
        Navigate('/')
     }else{
      toast({
        title: "Password is wrong check again your credentials ",
        position: ["top"],
        isClosable: true,
      });
     }
    }
      })
      .catch((err) => console.log(err));
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        // bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            // bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={8}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <HStack onClose={onClose}>
                  <RouterLink to="/signup">
                    {" "}
                    <Button color={"blue.400"}>New Account</Button>{" "}
                  </RouterLink>
                  <RouterLink to="/">
                    <Button color={"red.400"}>Home</Button>
                  </RouterLink>
                  <RouterLink to="/admin-dashboard">
                    <Button color={"green.400"}>Admin</Button>
                  </RouterLink>
                </HStack>
                <Button
                  onClick={loginSubmit}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
}
