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
        p="1rem"
        bg="#fdfdfd"
        borderRadius={["0", "0", "0", "1rem 0 0 0"]}
      >
        <HomeMenu />
      </Flex>
    </Flex>
  );
};

export default Home;
