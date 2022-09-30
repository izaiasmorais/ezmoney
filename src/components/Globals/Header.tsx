import { Flex, Text, Image, Button } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import { VscBell } from "react-icons/vsc";
import { useDrawer } from "../../contexts/DrawerContext";
import { IoMdMenu } from "react-icons/io";
import { ToggleThemeButton } from "./ToggleThemeButton";

interface Props {
  page: string;
}

export function Header({ page }: Props) {
  const { onOpen } = useDrawer();

  return (
    <Flex
      w="100%"
      py="1rem"
      borderRadius="1rem"
      align="center"
      justify="space-between"
      mb="1rem"
    >
      <Flex align="center" justify="center">
        <Button
          onClick={onOpen}
          bg="transparent !important"
          display={["block", "block", "block", "none"]}
        >
          <IoMdMenu size={30} />
        </Button>
        <Text fontWeight="600" fontSize="1.5rem">
          {page}
        </Text>
      </Flex>
      <Flex gap="1.5rem" align="center">
        <ToggleThemeButton />
        <IoSearchOutline size={20} cursor="pointer" />
        <VscBell size={20} cursor="pointer" />
        <Image
          src="/Profile.png"
          alt="Perfil"
          w="40px"
          h="40px"
          cursor="pointer"
        />
      </Flex>
    </Flex>
  );
}
