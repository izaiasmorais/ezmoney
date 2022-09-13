import { Flex, Text } from "@chakra-ui/react";
import { Layout } from "../components/Globals/Layout";
import { AddButton } from "../components/Globals/AddButton";

export default function Invoices() {
  return (
    <Layout title="Contas">
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

        <AddButton name="Adicionar conta" />
      </Flex>
    </Layout>
  );
}
