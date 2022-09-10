import { Flex, Text, Image } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import { VscBell } from "react-icons/vsc";

interface Props {
  page: string;
}

export function Header({ page }: Props) {
  return (
    <Flex
      w="100%"
      py="1rem"
      borderRadius="1rem"
      align="center"
      justify="space-between"
      mb="1rem"
    >
      <Text fontWeight="600" fontSize="1.5rem">
        {page}
      </Text>
      <Flex gap="1.5rem" align="center">
        <IoSearchOutline size={20} cursor="pointer" />
        <VscBell size={20} cursor="pointer" />
        <Image
          src="/assets/Profile.png"
          alt="Perfil"
          w="40px"
          h="40px"
          cursor="pointer"
        />
      </Flex>
    </Flex>
  );
}
