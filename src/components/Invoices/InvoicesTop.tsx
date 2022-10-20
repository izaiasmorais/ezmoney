import { Flex, Text } from "@chakra-ui/react";
import { AddButton } from "../Globals/GButton/AddButton";

interface Props {
  onOpen: () => void;
}

export function InvoicesTop({ onOpen }: Props) {
  return (
    <Flex
      w="100%"
      mt="1rem"
      mb="1rem"
      gap="1.5rem"
      align="center"
      justify="space-between"
    >
      <Text fontSize="1.25rem" fontWeight={500}>
        Lista de contas
      </Text>

      <Flex onClick={onOpen}>
        <AddButton text="Adicionar conta" />
      </Flex>
    </Flex>
  );
}
