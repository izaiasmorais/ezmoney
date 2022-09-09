import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Transactions() {
  return (
    <Flex w="100vw" h="100vh" bg="dark.500">
      <Sidebar />
      <Flex
        w="100%"
        direction="column"
        bg="white.200"
        borderRadius="1rem 0 0 0"
        p="1rem"
      >
        <Header page="Dashboard" />
      </Flex>
    </Flex>
  );
}
