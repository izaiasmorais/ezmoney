import { Flex} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { SidebarDrawer } from "../Sidebar/Drawer";

interface Props {
  children: ReactNode;
  title: string;
  maxw?: number;
}

export function Layout({ children, title, maxw = 1400 }: Props) {
  return (
    <Flex w="100%" minH="100vh" bg="back.sidebar">
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
        px="1rem"
        pt="1rem"
        pb="4rem"
        bg="back.body"
        color="text.body"
        borderRadius={["0", "0", "0", "1rem 0 0 0"]}
      >
        <Flex w="100%" margin="0 auto" maxW={1400}>
          <Header page={title} />
        </Flex>
        <Flex direction="column" w="100%" margin="0 auto" maxW={maxw}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
