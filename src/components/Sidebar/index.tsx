import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import { NavItem } from "./NavItem";
import {
  FaClipboardList,
  FaExchangeAlt,
  FaPoll,
  FaSignOutAlt,
  FaThLarge,
} from "react-icons/fa";
import { IoSettingsSharp, IoWallet } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { useRouter } from "next/router";

export function Sidebar() {
  const { asPath } = useRouter();

  return (
    <Flex
      h="100v%"
      w="100%"
      bg="dark.500"
      direction="column"
      maxW={["500px", "500px", "500px", "250px"]}
    >
      <Flex
        align="center"
        gap=".5rem"
        p="1rem"
        mb="2rem"
        display={["none", "none", "none", "flex"]}
      >
        <Image src="/assets/Logo.png" alt="Dinheiro" w="40px" h="40px" />
        <Text color="white" fontSize="1.5rem" fontWeight="700">
          EZMoney
        </Text>
      </Flex>

      <Stack align="flex-start" color="white" px=".75rem">
        <NavItem
          name="Dashboard"
          src="/"
          icon={
            <FaThLarge
              size={20}
              color={asPath.endsWith("/") ? "#ffffff" : "#919eab"}
            />
          }
          active
        />
        <NavItem
          name="Transações"
          src="/transactions"
          icon={
            <FaExchangeAlt
              size={20}
              color={asPath.endsWith("/transactions") ? "#ffffff" : "#919eab"}
            />
          }
          active
        />
        <NavItem
          name="Orçamento"
          src="/budget"
          icon={
            <FaPoll
              size={20}
              color={asPath.endsWith("/budget") ? "#ffffff" : "#919eab"}
            />
          }
          active
        />
        <NavItem
          name="Contas"
          src="/invoices"
          icon={
            <FaClipboardList
              size={20}
              color={asPath.endsWith("/invoices") ? "#ffffff" : "#919eab"}
            />
          }
          active
        />
        <NavItem
          name="Configurações"
          src="/settings"
          icon={
            <IoSettingsSharp
              size={20}
              color={asPath.endsWith("/settings") ? "#ffffff" : "#919eab"}
            />
          }
          active
        />
        <NavItem
          name="Desconectar"
          src="/logout"
          icon={
            <FaSignOutAlt
              size={20}
              color={asPath.endsWith("/logout") ? "#ffffff" : "#919eab"}
            />
          }
          active
        />
      </Stack>
    </Flex>
  );
}
