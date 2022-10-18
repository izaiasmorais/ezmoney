import { Flex, Checkbox, Button, Text, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useMoney } from "../../contexts/MoneyContext";

export function AuthBox() {
  const { push } = useRouter();
  const { nextTheme } = useMoney();

  function redirect() {
    push("dashboard");
  }

  function Login() {
    toast.error("Sistema de login/cadastro não disponível no momento!");
  }

  return (
    <Flex
      w="100%"
      align="center"
      bg="#161C24"
      justify="center"
      direction="column"
      h="100%"
      p="1rem"
    >
      <Flex maxW="350px" w="100%" direction="column" gap="1rem">
        <Text
          color="white"
          fontWeight={700}
          fontSize="1.5rem"
          lineHeight="36px"
        >
          Log in
        </Text>

        <Input
          focusBorderColor="purple.700"
          borderColor="#7180963e"
          id="email"
          name="email"
          type="email"

          placeholder="E-mail"
          _placeholder={{ color: "#718096" }}
        />

        <Input
          focusBorderColor="purple.700"
          borderColor="#7180963e"
          id="password"
          name="password"
          type="password"
        
          placeholder="Senha"
          _placeholder={{ color: "#718096" }}
        />

        <Flex justify="space-between" fontSize=".875rem">
          <Checkbox
            color="#718096"
            colorScheme="purple"
            outline="none"
            fontSize=".875rem"
          >
            <Text fontSize=".875rem">Lembrar senha</Text>
          </Checkbox>
          <Text color="#718096" textDecoration="underline" cursor="pointer">
            Esqueceu sua senha?
          </Text>
        </Flex>

        <Button
          bg="purple.700"
          _hover={{ bg: "purple.500" }}
          w="100%"
          onClick={redirect}
        >
          Entrar
        </Button>

        <Button
          w="100%"
          gap=".5rem"
          color="black"
          display="flex"
          alignItems="center"
          bg="#EDF2F7"
          _hover={{ bg: "#E2E8F0" }}
        >
          <FcGoogle size={25} />
          Entrar com Google
        </Button>
      </Flex>
    </Flex>
  );
}
