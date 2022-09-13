import { Flex, Text } from "@chakra-ui/react";
import { Layout } from "../components/Globals/Layout";
import { AddButton } from "../components/Globals/AddButton";
import { useShadow } from "../contexts/ShadowContext";

export default function Invoices() {
  const {shadow} = useShadow()

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

      <Flex mt="1rem" w="100%" bg="back.boxes" boxShadow={shadow}>
        
      </Flex>
    </Layout>
  );
}
