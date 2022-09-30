import { Flex, FormLabel, Input, Box, Text, Image } from "@chakra-ui/react";
import { useMoney } from "../../contexts/MoneyContext";
import { MoneyBox } from "../Globals/MoneyBox";

export function GeneralData() {
  const { nextTheme } = useMoney();

  return (
    <Flex w="100%" p="1rem" direction={["column", "row", "row"]} align="center">
      <MoneyBox
        direction="column"
        boxShadow="none"
        align="center"
        justify="center"
      >
        <Image
          src="/Profile.png"
          alt="Foto de Perfil"
          maxW="150px"
          borderRadius="50%"
          p=".3rem"
          border="1px dashed black"
        />

        <Text
          fontSize="xs"
          color={nextTheme.text.paragraphy}
          w="100%"
          mt="1rem"
        >
          Formatos permitidos: *.jpeg, *.png, *.jpg e *.gif.
        </Text>
      </MoneyBox>

      <MoneyBox
        w="100%"
        boxShadow="none"
        maxH={["", "", "200px"]}
        display="grid"
        gap="1rem"
        gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
      >
        <Box>
          <FormLabel>Nome</FormLabel>
          <Input />
        </Box>
        <Box>
          <FormLabel>Usuário</FormLabel>
          <Input />
        </Box>
        <Box>
          <FormLabel>Email</FormLabel>
          <Input />
        </Box>
        <Box>
          <FormLabel>Descrição</FormLabel>
          <Input />
        </Box>
      </MoneyBox>
    </Flex>
  );
}
