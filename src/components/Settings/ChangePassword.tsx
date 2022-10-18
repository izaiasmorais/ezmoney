import { Button, Flex } from "@chakra-ui/react";
import { GInput } from "../Modal/GInput";

export function ChangePassword() {
  return (
    <Flex p="2rem" direction="column" maxW="400px" gap="1rem">
      <GInput placeholder="Senha Anterior" />
      <GInput placeholder="Nova Senha" />
      <GInput placeholder="Confirmar Nova Senha" />
      <Button
        color="white.100"
        bg="purple.700"
        display="block"
        _hover={{ bg: "purple.500" }}
      >
        Salvar Mudanças
      </Button>
    </Flex>
  );
}
