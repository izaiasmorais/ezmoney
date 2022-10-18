import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import { useMoney } from "../../contexts/MoneyContext";
import { useDrawer } from "../../hooks/useDrawer";
import { Sidebar } from "./index";

export function SidebarDrawer() {
  const { nextTheme } = useMoney();
  const { isOpen, onClose } = useDrawer();

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg={nextTheme.back.sidebar} color="white.100">
          <DrawerCloseButton mt=".5rem" />

          <DrawerHeader>
            <Flex align="center" gap=".5rem">
              <Image
                src="/Logo.png"
                alt="Logo dinheiro | EZMoney"
                w="40px"
                h="40px"
              />
              <Text fontWeight="600">EZMoney</Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody mt="1rem" p="0">
            <Sidebar />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
