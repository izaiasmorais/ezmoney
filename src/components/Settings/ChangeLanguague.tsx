import { Flex, Select, Button } from "@chakra-ui/react";

export function ChangeLanguague() {
  return (
    <Flex p="2rem" direction="column" w="336px">
      <Select
        placeholder="Selecionar Idioma"
        maxW={336}
        focusBorderColor="purple.700"
      >
        <option value="pt-br">Português</option>
        <option value="en-us">English</option>
        <option value="es-es">Español</option>
      </Select>
      <Button
        color="white.100"
        bg="purple.700"
        mt="1rem"
        _hover={{ bg: "purple.500" }}
      >
        Salvar Mudanças
      </Button>
    </Flex>
  );
}
