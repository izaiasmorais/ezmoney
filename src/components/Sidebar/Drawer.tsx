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
import { useSidebarDrawer } from "../../contexts/SidebarContext";
import { Sidebar } from "./index";

export function SidebarDrawer() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="dark.500" color="white.50">
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
