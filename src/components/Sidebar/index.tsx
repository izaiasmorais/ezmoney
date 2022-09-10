import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import { NavItem } from "./NavItem";

import { FaClipboardList, FaExchangeAlt, FaPoll } from "react-icons/fa";
import { IoSettingsSharp, IoWallet } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

export function Sidebar() {
  return (
    <Flex h="100%" w="100%" maxW="250px" bg="dark.500" direction="column">
      <Flex align="center" gap=".5rem" p="1rem" mb="2rem">
        <Image src="/assets/Logo.png" alt="Dinheiro" w="40px" h="40px" />
        <Text color="white" fontSize="1.5rem" fontWeight="700">
          EZMONEY
        </Text>
      </Flex>

      <Stack align="flex-start" color="white" px=".75rem">
        <NavItem
          name="Dashboard"
          src="/"
          icon={<IoWallet size={20} />}
          active
        />
        <NavItem
          name="Transactions"
          src="/transactions"
          icon={<FaExchangeAlt size={20} />}
          active
        />
        <NavItem
          name="Budget"
          src="/budget"
          icon={<FaPoll size={20} />}
          active
        />
        <NavItem
          name="Invoices"
          src="/invoices"
          icon={<FaClipboardList size={20} />}
          active
        />
        <NavItem
          name="Settings"
          src="/settings"
          icon={<IoSettingsSharp size={20} />}
          active
        />
        <NavItem
          name="Logout"
          src="/logout"
          icon={<TbLogout size={20} />}
          active
        />
      </Stack>
    </Flex>
  );
}
