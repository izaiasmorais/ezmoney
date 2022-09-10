import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { HomeMenu } from "../components/HomeMenu";
import { Sidebar } from "../components/Sidebar";

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
        <HomeMenu />
      </Flex>
    </Flex>
  );
};

export default Home;
