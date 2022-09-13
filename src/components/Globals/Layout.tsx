import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { SidebarDrawer } from "../Sidebar/Drawer";

interface Props {
  children: ReactNode;
  title: string;
}

export function Layout({ children, title }: Props) {
  return (
    <Flex w="100vw" minH="100vh" bg="back.sidebar">
      <SidebarDrawer />
      <Flex
        w="100%"
        h="100vh"
        direction="column"
        display={["none", "none", "none", "flex"]}
        maxW={["500px", "500px", "500px", "250px"]}
      >
        <Sidebar />
      </Flex>

      <Flex
        direction="column"
        w="100%"
        p="1rem"
        bg="back.body"
        color="text.body"
        borderRadius={["0", "0", "0", "1rem 0 0 0"]}
      >
        <Flex direction="column" w="100%" margin="0 auto" maxW={1400}>
          <Header page={title} />
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
