import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMoney } from "../../contexts/MoneyContext";
import { ItemMenu } from "./ItemMenu";

export function HeaderMenu() {
  const { nextTheme, shadow } = useMoney();
  const { push } = useRouter();

  return (
    <Menu>
      <MenuButton>
        <Avatar
          src="/Profile.png"
          name="Izaías Lima"
          w="35px"
          h="35px"
          cursor="pointer"
        />
      </MenuButton>
      <MenuList
        bg={nextTheme.back.boxes}
        boxShadow={shadow}
        borderColor={nextTheme.back.boxes}
        my="3"
        p=".5rem"
      >
        <Flex align="center" direction="column" justify="center" p="1rem">
          <Avatar
            src="/Profile.png"
            name="Izaías Lima"
            w="100px"
            h="100px"
            cursor="pointer"
            mb="1rem"
          />
          <Text fontWeight={600} fontSize="1.125rem">
            Izaías Lima
          </Text>
          <Text fontSize=".875rem" color={nextTheme.text.paragraphy}>
            izaiaslima356@gmail.com
          </Text>
        </Flex>

        <ItemMenu onClick={() => push("/settings")}>Perfil</ItemMenu>
        <ItemMenu onClick={() => push("/settings")}>Configurações</ItemMenu>
        <ItemMenu>Sobre</ItemMenu>
        <ItemMenu onClick={() => push("/")}>Desconectar</ItemMenu>
      </MenuList>
    </Menu>
  );
}
