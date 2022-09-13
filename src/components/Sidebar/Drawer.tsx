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
  useBreakpointValue,
} from "@chakra-ui/react";
import { useDrawer } from "../../contexts/DrawerContext";
import { Sidebar } from "./index";

export function SidebarDrawer() {
  const { isOpen, onClose } = useDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="back.sidebar" color="white.50">
            <DrawerCloseButton mt=".5rem" />

            <DrawerHeader>
              <Flex align="center" gap=".5rem">
                <Image
                  src="/assets/Logo.png"
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

  return <Sidebar />;
}
