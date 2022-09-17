import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { AddButton } from "../components/Globals/AddButton";
import { BudgetBox } from "../components/BudgetTable/BudgetBox";
import { Layout } from "../components/Globals/Layout";

export default function Budget() {
  return (
    <Layout title="Orçamento" maxw={1200}>
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
        gap="1.5rem"
        mt="1rem"
        gridTemplateColumns={[
          "1fr",
          "1fr ",
          "1fr 1fr",
          "1fr 1fr",
          "1fr 1fr",
          "repeat(3, 1fr)",
        ]}
      >
        <BudgetBox total={500} spent={600} category="Transporte" />
        <BudgetBox total={1500} spent={1200} category="Shopping" />
        <BudgetBox total={2000} spent={450} category="Contas" />
      </SimpleGrid>
    </Layout>
  );
}
