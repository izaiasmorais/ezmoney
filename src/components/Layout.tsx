import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { SidebarDrawer } from "./Sidebar/Drawer";

interface Props {
  children: ReactNode;
  title: string;
}

export function Layout({ children, title }: Props) {
  return (
    <Flex w="100vw" h="100vh" bg="dark.500">
      <SidebarDrawer />
      {/* <Sidebar /> */}

      <Flex
        direction="column"
        w="100%"
        p="1rem"
        bg="#fdfdfd"
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
