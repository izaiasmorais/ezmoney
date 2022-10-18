import { Flex, Text, Button, Avatar } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import { VscBell } from "react-icons/vsc";
import { IoMdMenu } from "react-icons/io";
import { ThemeSelect } from "./ThemeSelect";
import { useDrawer } from "../../hooks/useDrawer";
import { HeaderMenu } from "./HeaderMenu";
import { Notifications } from "./Notifications";

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
          <IoMdMenu size={20} />
        </Button>
        <Text fontWeight="600" fontSize={["1rem", "1.25rem", "1.5rem"]}>
          {page}
        </Text>
      </Flex>

      <Flex gap="1.5rem" align="center">
        <IoSearchOutline size={20} cursor="pointer" />

        <Notifications />

        <ThemeSelect />

        <HeaderMenu />
      </Flex>
    </Flex>
  );
}
