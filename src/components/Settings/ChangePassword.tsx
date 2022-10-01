import { Button, Flex, Input } from "@chakra-ui/react";

export function ChangePassword() {
  return (
    <Flex p="2rem" direction="column" maxW="400px" gap="1rem">
      <Input placeholder="Senha Anterior" />
      <Input placeholder="Nova Anterior" />
      <Input placeholder="Confirmar Nova Anterior" />
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
