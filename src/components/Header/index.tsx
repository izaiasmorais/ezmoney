import { Flex, Text, Image } from "@chakra-ui/react";

interface Props {
  page: string;
}

export function Header({ page }: Props) {
  return (
    <Flex
      w="100%"
      p="1rem"
      borderRadius="1rem"
      align="center"
      justify="space-between"
      mb="3rem"
    >
      <Text fontWeight="500" fontSize="1.25rem">
        {page}
      </Text>
      <Flex gap="1.5rem" align="center">
        <Image src="/assets/IconSearch.png" alt="Pesquisar" w="20px" h="20px" />
        <Image
          src="/assets/IconBell.png"
          alt="Notificações"
          w="20px"
          h="20px"
        />
        <Image src="/assets/Profile.png" alt="Perfil" w="40px" h="40px" />
      </Flex>
    </Flex>
  );
}
