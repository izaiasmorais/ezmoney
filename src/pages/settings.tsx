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
        borderRadius="1rem 0 0 0"
        p="1rem"
        bg="#fdfdfd"
      >
        <Flex direction="column" w="100%" margin="0 auto" maxW={1400}>
          <Header page="Configurações" />
        </Flex>
      </Flex>
    </Flex>
  );
}
