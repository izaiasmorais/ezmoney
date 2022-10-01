import { Button, Flex } from "@chakra-ui/react";
import { GlobalInput } from "../Globals/GlobalInput";

export function ChangePassword() {
  return (
    <Flex p="2rem" direction="column" maxW="400px" gap="1rem">
      <GlobalInput placeholder="Senha Anterior" />
      <GlobalInput placeholder="Nova Senha" />
      <GlobalInput placeholder="Confirmar Nova Senha" />
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
