import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import { NavItem } from "./NavItem";
import {
  FaCalendarAlt,
  FaClipboardList,
  FaExchangeAlt,
  FaPoll,
  FaSignOutAlt,
  FaThLarge,
} from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import { useMoney } from "../../contexts/MoneyContext";

export function Sidebar() {
  const { nextTheme } = useMoney();
  const { asPath } = useRouter();

  return (
    <Flex
      h="100%"
      w="100%"
      bg={nextTheme.back.sidebar}
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
        {/* <NavItem
          name="Calendário"
          src="/calendar"
          icon={
            <FaCalendarAlt
              size={20}
              color={asPath.endsWith("/calendar") ? "#ffffff" : "#919eab"}
            />
          }
          active
        /> */}
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
