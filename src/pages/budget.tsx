import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { AddButton } from "../components/Summary/AddButton";
import { BudgetBox } from "../components/BudgetTable/BudgetBox";
import { Layout } from "../components/Layout";

export default function Budget() {
  return (
    <Layout title="Orçamento">
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
          "1fr 1fr",
          "1fr 1fr",
          "1fr 1fr",
          "1fr 1fr",
          "repeat(4, 1fr)",
        ]}
      >
        <BudgetBox total={500} spent={600} category="Transporte" />
        <BudgetBox total={1500} spent={1200} category="Shopping" />
      </SimpleGrid>
    </Layout>
  );
}
