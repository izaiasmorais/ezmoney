import { Flex, Text, Button, Avatar } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import { VscBell } from "react-icons/vsc";
import { useDrawer } from "../../contexts/DrawerContext";
import { IoMdMenu } from "react-icons/io";
import { GlobalSelect } from "./GlobalSelect";

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
        <Text fontWeight="600" fontSize={["1.1rem", "1.5rem"]}>
          {page}
        </Text>
      </Flex>
      <Flex gap="1.5rem" align="center">
        <GlobalSelect />

        <IoSearchOutline size={20} cursor="pointer" />

        <VscBell size={20} cursor="pointer" />

        <Avatar
          src="/Profile.png"
          name="Izaías Lima"
          w="40px"
          h="40px"
          cursor="pointer"
        />
      </Flex>
    </Flex>
  );
}
