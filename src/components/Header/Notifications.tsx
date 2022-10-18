import {
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { VscBell } from "react-icons/vsc";
import { useMoney } from "../../contexts/MoneyContext";

export function Notifications() {
  const { nextTheme, shadow } = useMoney();

  return (
    <Menu>
      <MenuButton>
        <VscBell size={20} cursor="pointer" />
      </MenuButton>
      <MenuList
        bg={nextTheme.back.boxes}
        boxShadow={shadow}
        borderColor={nextTheme.back.boxes}
        my="3"
        p="1rem"
      >
        <Text fontWeight={600} fontSize="1.125rem" mb=".5rem">
          Notificações
        </Text>

        <Divider w="100%" h="1px" bg="#e5e5e5" mb=".5rem" />

        <Text fontSize=".875rem" color={nextTheme.text.paragraphy}>
          Você não possui notificações para exibir
        </Text>
      </MenuList>
    </Menu>
  );
}
