import {
  Flex,
  FormLabel,
  Input,
  Box,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { useMoney } from "../../contexts/MoneyContext";
import { GInput } from "../Modal/GInput";
import { GBox } from "../Globals/GBox";

export function GeneralData() {
  const { nextTheme } = useMoney();

  return (
    <Flex
      w="100%"
      p="1rem"
      direction={["column", "column", "row"]}
      align="center"
    >
      <GBox direction="column" boxShadow="none" align="center" justify="center">
        <Image
          src="/Profile.png"
          alt="Foto de Perfil"
          maxW="150px"
          borderRadius="50%"
          p=".3rem"
          border={`1px dashed ${nextTheme.text.paragraphy}`}
        />

        <Text
          fontSize="xs"
          color={nextTheme.text.paragraphy}
          w="100%"
          mt="1rem"
        >
          Formatos permitidos: *.jpeg, *.png, *.jpg e *.gif.
        </Text>
      </GBox>

      <GBox
        w="100%"
        boxShadow="none"
        maxH={["", "", "300px"]}
        display="grid"
        gap="1rem"
        gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
      >
        <Box>
          <FormLabel>Nome</FormLabel>
          <GInput type="text" />
        </Box>
        <Box>
          <FormLabel>Usuário</FormLabel>
          <GInput type="text" />
        </Box>
        <Box>
          <FormLabel>Email</FormLabel>
          <GInput type="email" />
        </Box>
        <Box>
          <FormLabel>Descrição</FormLabel>
          <GInput type="text" />
        </Box>
        <Flex w="100%" mt="1rem" gridColumn={["1", "1", "1 / 3"]} justify="end">
          <Button
            color="white.100"
            bg="purple.700"
            _hover={{ bg: "purple.500" }}
          >
            Salvar Mudanças
          </Button>
        </Flex>
      </GBox>
    </Flex>
  );
}
