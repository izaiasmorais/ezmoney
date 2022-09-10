import { Flex, SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Budget } from "../components/Budget";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Summary } from "../components/Summary";
import { TransactionsTable } from "../components/TransactionsTable";

const Home: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" bg="dark.500">
      <Sidebar />
      <Flex
        direction="column"
        w="100%"
        bg="#fdfdfd"
        borderRadius="1rem 0 0 0"
        p="1rem"
      >
        <Flex direction="column" w="100%" margin="0 auto" maxW={1400}>
          <Header page="Dashboard" />
          <Summary />

          <SimpleGrid gridAutoColumns="repeat(4, 1fr)" mt="4rem" gap="7rem">
            <TransactionsTable />
            <Budget />
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
