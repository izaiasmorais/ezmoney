import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import { NavItem } from "./NavItem";

export function Sidebar() {
  return (
    <Flex h="100vh" w="100%" maxW="250px" bg="dark.500" direction="column">
      <Flex align="center" gap=".5rem" p="1rem" mb="2rem">
        <Image src="/assets/Logo.png" alt="Dinheiro" w="40px" h="40px" />
        <Text color="white" fontSize="1.5rem" fontWeight="600">
          EZMoney
        </Text>
      </Flex>

      <Stack align="flex-start" color="white" px=".75rem">
        <NavItem name="Dashboard" src="/" active />
        <NavItem name="Transactions" src="/" />
        <NavItem name="Budget" src="/" />
        <NavItem name="Settings" src="/" />
        <NavItem name="Logout" src="/" />
      </Stack>
    </Flex>
  );
}
