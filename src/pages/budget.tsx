import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { SidebarDrawer } from "../components/Sidebar/Drawer";
import { AddButton } from "../components/Summary/AddButton";
import { BudgetBox } from "../components/Budget/BudgetBox";
import { Header } from "../components/Header";

export default function Transactions() {
  return (
    <Flex w="100vw" h="100vh" bg="dark.500">
      <SidebarDrawer />
      <Flex
        w="100%"
        direction="column"
        borderRadius="1rem 0 0 0"
        p="1rem"
        bg="#fdfdfd"
      >
        <Flex direction="column" w="100%" margin="0 auto" maxW={1400}>
          <Header page="Orçamento" />

          <Flex
            w="100%"
            mt="1rem"
            mb="1rem"
            gap="1.5rem"
            align="center"
            justify="space-between"
          >
            <Text fontSize="1.25rem" fontWeight={500}>
              Total: R$ 2000
            </Text>

            <AddButton name="Criar orçamento" />
          </Flex>

          <SimpleGrid
            gridTemplateColumns="repeat(4, 1fr)"
            gap="1.5rem"
            mt="1rem"
          >
            <BudgetBox total={500} spent={600} category="Transporte" />
            <BudgetBox total={1500} spent={1200} category="Shopping" />
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
}
